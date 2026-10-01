import { apiRequest } from "@/lib/api";
import type { Match } from "@/types/match";

export function fetchMatches(signal?: AbortSignal): Promise<Match[]> {
  return apiRequest<Match[]>("/matches", { signal });
}

export function fetchMatchById(id: number, signal?: AbortSignal): Promise<Match> {
  return apiRequest<Match>(`/matches/${id}`, { signal });
}
