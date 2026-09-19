#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
default_project_id="mcbuse-hackathon-2026-fno"
project_id="${MCBUSE_GCP_PROJECT_ID:-$default_project_id}"
region="${MCBUSE_GCP_REGION:-europe-west1}"
repository="${MCBUSE_ARTIFACT_REPOSITORY:-mcbuse}"
service="${MCBUSE_LANDING_SERVICE:-mcbuse-landing-page}"

if ! command -v gcloud >/dev/null 2>&1; then
  echo "Google Cloud CLI is required. Install it, then run: gcloud auth login" >&2
  exit 1
fi

active_account="$(gcloud auth list --filter=status:ACTIVE --format='value(account)' 2>/dev/null || true)"
if [[ -z "$active_account" ]]; then
  echo "No active Google Cloud account. Run: gcloud auth login" >&2
  exit 1
fi

echo "Deploying the landing page to GCP project: $project_id"
if [[ -z "${MCBUSE_GCP_PROJECT_ID:-}" ]]; then
  echo "Using the repository default. Override with MCBUSE_GCP_PROJECT_ID if needed."
fi

project_number="$(gcloud projects describe "$project_id" --format='value(projectNumber)')"
if [[ ! "$project_number" =~ ^[0-9]+$ ]]; then
  echo "Could not resolve the numeric project number for $project_id." >&2
  exit 1
fi

revision="$(date -u +%Y%m%dT%H%M%SZ)-$(git -C "$repo_root" rev-parse --short=8 HEAD)"
image="${region}-docker.pkg.dev/${project_id}/${repository}/landing-page:${revision}"

gcloud builds submit "$repo_root" \
  --project="$project_id" \
  --tag="$image"

gcloud run deploy "$service" \
  --project="$project_id" \
  --region="$region" \
  --image="$image" \
  --allow-unauthenticated \
  --ingress=all \
  --port=8080 \
  --cpu=1 \
  --memory=512Mi \
  --concurrency=80 \
  --min-instances=0 \
  --max-instances=2 \
  --timeout=60s \
  --cpu-throttling \
  --labels=app=mcbuse,component=landing-page,environment=hackathon

service_url="$(gcloud run services describe "$service" \
  --project="$project_id" \
  --region="$region" \
  --format='value(status.url)')"
curl --fail --silent --show-error "$service_url" >/dev/null

echo "MCBuse landing page deployed"
echo "service_url=$service_url"
