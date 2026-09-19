// Client-side persistence for form submissions. This is the stub "backend":
// submissions are written to the browser's localStorage instead of a server,
// keyed by form name. Swap this out for a real backend/CRM call once one is
// chosen — the shape of `saveFormSubmission` is the single integration point.

export type StoredSubmission<T = Record<string, unknown>> = {
  id: string;
  submittedAt: string;
  data: T;
};

const STORAGE_PREFIX = "mcbuse:submissions:";

function isBrowser() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function storageKey(formName: string) {
  return `${STORAGE_PREFIX}${formName}`;
}

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/** Appends a submission to the form's list in localStorage. Returns the stored entry, or null if unavailable (SSR, private mode, quota exceeded). */
export function saveFormSubmission<T>(formName: string, data: T): StoredSubmission<T> | null {
  if (!isBrowser()) return null;

  const entry: StoredSubmission<T> = {
    id: createId(),
    submittedAt: new Date().toISOString(),
    data,
  };

  try {
    const existing = getFormSubmissions<T>(formName);
    window.localStorage.setItem(storageKey(formName), JSON.stringify([...existing, entry]));
    return entry;
  } catch (error) {
    console.error(`[mcbuse:localStorage] Failed to save "${formName}" submission`, error);
    return null;
  }
}

/** Reads all stored submissions for a given form. Returns an empty array if unavailable or empty. */
export function getFormSubmissions<T = Record<string, unknown>>(formName: string): StoredSubmission<T>[] {
  if (!isBrowser()) return [];

  try {
    const raw = window.localStorage.getItem(storageKey(formName));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredSubmission<T>[]) : [];
  } catch (error) {
    console.error(`[mcbuse:localStorage] Failed to read "${formName}" submissions`, error);
    return [];
  }
}
