export type MatchStatus = "AVAILABLE" | "CANCELED";

export type Match = {
  id: number;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  location: string;
  ticketPrice: number;
  ticketQuantity: number;
  status: MatchStatus;
  organizer: {
    id: number;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ApiError = {
  message: string;
};
