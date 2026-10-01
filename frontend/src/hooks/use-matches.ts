"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchMatchById, fetchMatches } from "@/services/matches";
import type { Match } from "@/types/match";

type State<T> = {
  data: T | null;
  error: string | null;
  isLoading: boolean;
};

/**
 * `load` recebe `null` quando não há dados a buscar (ex.: id inválido),
 * evitando chamadas desnecessárias à API.
 */
function useRemoteData<T>(load: ((signal: AbortSignal) => Promise<T>) | null) {
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState<State<T>>({
    data: null,
    error: null,
    isLoading: load !== null,
  });

  useEffect(() => {
    if (load === null) {
      return;
    }

    const controller = new AbortController();
    let isActive = true;

    load(controller.signal)
      .then((data) => {
        if (isActive) {
          setState({ data, error: null, isLoading: false });
        }
      })
      .catch((error: unknown) => {
        const isAborted =
          error instanceof DOMException && error.name === "AbortError";

        if (!isActive || isAborted) {
          return;
        }

        setState({
          data: null,
          error: error instanceof Error ? error.message : "Erro inesperado",
          isLoading: false,
        });
      });

    return () => {
      isActive = false;
      controller.abort();
    };
  }, [attempt, load]);

  const retry = useCallback(() => {
    setState({ data: null, error: null, isLoading: true });
    setAttempt((value) => value + 1);
  }, []);

  return { ...state, retry };
}

export function useMatches() {
  const load = useCallback(
    (signal: AbortSignal) => fetchMatches(signal),
    [],
  );

  return useRemoteData<Match[]>(load);
}

export function useMatchById(id: number | null) {
  const load = useCallback(
    (signal: AbortSignal) => fetchMatchById(id as number, signal),
    [id],
  );

  return useRemoteData<Match>(id === null ? null : load);
}
