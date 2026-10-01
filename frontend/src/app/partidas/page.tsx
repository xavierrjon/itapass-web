"use client";

import { MatchCard } from "@/components/match-card";
import { EmptyState, ErrorState, LoadingState } from "@/components/states";
import { useMatches } from "@/hooks/use-matches";

export default function MatchesPage() {
  const { data, error, isLoading, retry } = useMatches();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight text-ink">Partidas</h1>
      <p className="mt-2 text-sm text-muted">
        Confira as partidas disponíveis e compre seu ingresso.
      </p>

      <div className="mt-8">
        {isLoading ? <LoadingState label="Carregando partidas..." /> : null}

        {error ? <ErrorState message={error} onRetry={retry} /> : null}

        {!isLoading && !error && data?.length === 0 ? (
          <EmptyState
            title="Nenhuma partida disponível"
            description="Ainda não há partidas cadastradas. Volte em breve para conferir as próximas."
          />
        ) : null}

        {!isLoading && !error && data && data.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((match) => (
              <li key={match.id} className="min-w-0">
                <MatchCard match={match} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
