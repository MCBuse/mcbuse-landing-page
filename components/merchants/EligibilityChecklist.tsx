"use client";

import { useState } from "react";
import { merchantsCopy } from "@/content/copy/merchants";
import { Button } from "@/components/ui/Button";

export function EligibilityChecklist() {
  const { criteria } = merchantsCopy.eligibility;
  const [checked, setChecked] = useState<boolean[]>(() => criteria.map(() => false));
  const [result, setResult] = useState<"eligible" | "partial" | null>(null);

  const toggle = (index: number) => {
    setResult(null);
    setChecked((prev) => prev.map((value, i) => (i === index ? !value : value)));
  };

  const checkEligibility = () => {
    const allChecked = checked.every(Boolean);
    setResult(allChecked ? "eligible" : "partial");
  };

  return (
    <div>
      <fieldset className="space-y-3">
        <legend className="sr-only">Eligibility criteria</legend>
        {criteria.map((criterion, i) => (
          <label key={criterion} className="flex items-start gap-3 text-sm text-ink">
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() => toggle(i)}
              className="mt-1 h-4 w-4 border-hairline accent-brand"
            />
            <span>{criterion}</span>
          </label>
        ))}
      </fieldset>

      <div className="mt-6">
        <Button type="button" variant="primary" onClick={checkEligibility}>
          Check Eligibility Now
        </Button>
      </div>

      <div role="status" aria-live="polite" className="mt-4">
        {result === "eligible" && (
          <p className="border-l-2 border-brand pl-3 text-sm text-ink">
            You meet all listed criteria. We&rsquo;ll follow up on fit once you submit a pilot application.
          </p>
        )}
        {result === "partial" && (
          <p className="border-l-2 border-ink/30 pl-3 text-sm text-ink">
            You don&rsquo;t meet all criteria yet you&rsquo;re still welcome to apply, and we&rsquo;ll confirm fit during review.
          </p>
        )}
      </div>
    </div>
  );
}
