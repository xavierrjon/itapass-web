import { AlertCircle, CalendarX2, Loader2, RefreshCw } from "lucide-react";

export function LoadingState({ label }: { label: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center gap-3 py-20 text-muted"
    >
      <Loader2 className="size-6 animate-spin" aria-hidden="true" />
      <p className="text-sm">{label}</p>
    </div>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border-subtle bg-surface px-6 py-16 text-center">
      <CalendarX2 className="size-7 text-muted" aria-hidden="true" />
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="max-w-sm text-sm text-muted">{description}</p>
      {action}
    </div>
  );
}

export function ErrorState({
  message,
  onRetry,
}: {
  message: string;
  onRetry?: () => void;
}) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-3 rounded-xl border border-danger/20 bg-danger-soft px-6 py-16 text-center"
    >
      <AlertCircle className="size-7 text-danger" aria-hidden="true" />
      <h3 className="text-base font-semibold text-ink">
        Não foi possível carregar
      </h3>
      <p className="max-w-sm text-sm text-muted">{message}</p>
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="mt-2 inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-background focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
        >
          <RefreshCw className="size-4" aria-hidden="true" />
          Tentar novamente
        </button>
      ) : null}
    </div>
  );
}
