"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { ZodType } from "zod";
import { initialFormState, type FormState } from "@/lib/validation";
import { saveFormSubmission } from "@/lib/formStorage";

// Purely cosmetic: gives the button a brief "Submitting…" moment instead of
// switching straight from click to result, even though the localStorage
// write itself is instant.
const SUBMIT_DELAY_MS = 400;

/**
 * Drives a form's submit lifecycle entirely on the client: validates
 * `FormData` against a zod schema, and on success writes the parsed data to
 * localStorage (see lib/formStorage.ts) instead of calling a server action.
 */
export function useLocalStorageForm<T>({
  formName,
  schema,
  parseFormData,
  successMessage,
}: {
  /** Key the submission is stored under in localStorage. */
  formName: string;
  schema: ZodType<T>;
  /** Builds the raw object to validate from the submitted FormData. */
  parseFormData: (formData: FormData) => unknown;
  successMessage: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>(initialFormState);
  const [pending, setPending] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const result = schema.safeParse(parseFormData(formData));

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setState({ status: "error", message: "Please fix the errors below.", fieldErrors });
      return;
    }

    setPending(true);
    timeoutRef.current = setTimeout(() => {
      saveFormSubmission(formName, result.data);
      formRef.current?.reset();
      setState({ status: "success", message: successMessage });
      setPending(false);
    }, SUBMIT_DELAY_MS);
  }

  return { formRef, state, errors: state.fieldErrors ?? {}, pending, handleSubmit };
}
