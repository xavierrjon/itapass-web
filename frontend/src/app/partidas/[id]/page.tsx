"use client";

import { ArrowLeft, CalendarDays, MapPin, Ticket, Users } from "lucide-react";
import Link from "next/link";
import { use, useMemo } from "react";
import { ErrorState, LoadingState } from "@/components/states";
import { useMatchById } from "@/hooks/use-matches";
import { formatDate, formatPrice } from "@/lib/format";

const details = [
  { icon: MapPin, label: "Local", key: "location" },
  { icon: Users, label: "Organizador", key: "organizer" },
  { icon: Ticket, label: "Ingressos disponíveis", key: "quantity" },
] as const;

export default function MatchDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const matchId = Number(id);
  const isValidId = Number.isInteger(matchId) && matchId > 0;

  const { data: match, error, isLoading, retry } = useMatchById(
    isValidId ? matchId : null,
  );

  const detailRows = useMemo(() => {
    if (!match) return [];

    const values: Record<(typeof details)[number]["key"], string> = {
      location: match.location,
      organizer: match.organizer.name,
      quantity: String(match.ticketQuantity),
    };

    return details.map(({ icon: Icon, label, key }) => ({
      id: key,
      label,
      value: values[key],
      icon: Icon,
    }));
  }, [match]);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/partidas"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Voltar para partidas
      </Link>

      <div className="mt-6">
        {isLoading ? <LoadingState label="Carregando partida..." /> : null}

        {!isValidId && !isLoading ? (
          <ErrorState message="Identificador de partida inválido." />
        ) : null}

        {error && isValidId ? (
          <ErrorState message={error} onRetry={retry} />
        ) : null}

        {match ? (
          <article className="rounded-xl border border-border-subtle bg-surface p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={
                  match.status === "AVAILABLE"
                    ? "rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary"
                    : "rounded-full bg-danger-soft px-2.5 py-1 text-xs font-medium text-danger"
                }
              >
                {match.status === "AVAILABLE" ? "Disponível" : "Cancelada"}
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <CalendarDays className="size-4" aria-hidden="true" />
                {formatDate(match.date)} às {match.time}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink">
              {match.homeTeam}
              <span className="mx-2 font-normal text-muted">vs</span>
              {match.awayTeam}
            </h1>

            <dl className="mt-8 grid gap-6 border-t border-border-subtle pt-6 sm:grid-cols-3">
              {detailRows.map(({ id, label, value, icon: Icon }) => (
                <div key={id}>
                  <dt className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted uppercase">
                    <Icon className="size-3.5" aria-hidden="true" />
                    {label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle pt-6">
              <div>
                <p className="text-xs font-medium tracking-wide text-muted uppercase">
                  Valor do ingresso
                </p>
                <p className="mt-1 text-2xl font-bold text-ink">
                  {formatPrice(match.ticketPrice)}
                </p>
              </div>

              <button
                type="button"
                disabled
                title="A compra será implementada na FASE 4"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-border-subtle px-5 py-3 text-sm font-semibold text-muted"
              >
                Comprar ingresso
              </button>
            </div>

            <p className="mt-4 text-xs text-muted">
              A compra de ingressos entra em uma próxima fase do desenvolvimento.
            </p>
          </article>
        ) : null}
      </div>
    </div>
  );
}
