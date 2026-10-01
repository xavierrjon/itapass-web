import { Ticket } from "lucide-react";
import Link from "next/link";
import { formatDate, formatPrice } from "@/lib/format";
import type { Match } from "@/types/match";

export function MatchCard({ match }: { match: Match }) {
  return (
    <Link
      href={`/partidas/${match.id}`}
      className="group flex flex-col rounded-xl border border-border-subtle bg-surface p-5 transition-colors hover:border-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-medium tracking-wide text-muted uppercase">
            {formatDate(match.date)}
          </p>
          <h3 className="mt-1 truncate text-base font-semibold text-ink">
            {match.homeTeam}
            <span className="mx-1.5 font-normal text-muted">vs</span>
            {match.awayTeam}
          </h3>
        </div>
        <span
          className={
            match.status === "AVAILABLE"
              ? "shrink-0 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary"
              : "shrink-0 rounded-full bg-danger-soft px-2.5 py-1 text-xs font-medium text-danger"
          }
        >
          {match.status === "AVAILABLE" ? "Disponível" : "Cancelada"}
        </span>
      </div>

      <p className="mt-3 truncate text-sm text-muted">{match.location}</p>

      <div className="mt-4 flex items-center justify-between border-t border-border-subtle pt-4">
        <span className="inline-flex items-center gap-1.5 text-sm text-muted">
          <Ticket className="size-4" aria-hidden="true" />
          {match.ticketQuantity} disponíveis
        </span>
        <span className="text-base font-semibold text-ink">
          {formatPrice(match.ticketPrice)}
        </span>
      </div>
    </Link>
  );
}
