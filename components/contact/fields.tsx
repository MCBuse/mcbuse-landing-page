import type { ReactNode } from "react";

function errorId(name: string) {
  return `${name}-error`;
}

function FieldError({ name, error }: { name: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={errorId(name)} className="mt-1 text-xs text-danger" role="alert">
      {error}
    </p>
  );
}

export function TextField({
  name,
  label,
  type = "text",
  error,
  required = true,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId(name) : undefined}
        className="mt-1 w-full rounded-lg border border-hairline bg-paper px-3 py-2 text-sm text-ink focus-visible:border-brand"
      />
      <FieldError name={name} error={error} />
    </div>
  );
}

export function TextAreaField({
  name,
  label,
  error,
  required = true,
}: {
  name: string;
  label: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId(name) : undefined}
        className="mt-1 w-full rounded-lg border border-hairline bg-paper px-3 py-2 text-sm text-ink focus-visible:border-brand"
      />
      <FieldError name={name} error={error} />
    </div>
  );
}

export function SelectField({
  name,
  label,
  options,
  error,
  required = true,
}: {
  name: string;
  label: string;
  options: string[];
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId(name) : undefined}
        className="mt-1 w-full rounded-lg border border-hairline bg-paper px-3 py-2 text-sm text-ink focus-visible:border-brand"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FieldError name={name} error={error} />
    </div>
  );
}

export function RadioGroup({
  name,
  label,
  options,
  error,
}: {
  name: string;
  label: string;
  options: string[];
  error?: string;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-ink">{label}</legend>
      <div className="mt-2 flex gap-4">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2 text-sm text-ink">
            <input type="radio" name={name} value={option} required className="accent-brand" />
            {option}
          </label>
        ))}
      </div>
      <FieldError name={name} error={error} />
    </fieldset>
  );
}

export function ConsentCheckbox({
  name,
  label,
  error,
}: {
  name: string;
  label: ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="flex items-start gap-3 text-sm text-ink">
        <input
          type="checkbox"
          name={name}
          defaultChecked={false}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId(name) : undefined}
          className="mt-1 h-4 w-4 border-hairline accent-brand"
        />
        <span>{label}</span>
      </label>
      <FieldError name={name} error={error} />
    </div>
  );
}
