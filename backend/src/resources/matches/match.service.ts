import { prisma } from '../../database/prisma.js';
import { Prisma, UserRole } from '../../generated/prisma/client.js';
import { AppError } from '../../errors/AppError.js';
import type {
  CreateMatchInput,
  ListMatchesQuery,
  MatchResponse,
} from './match.schema.js';

const matchInclude = {
  organizer: { select: { id: true, name: true } },
} satisfies Prisma.MatchInclude;

type MatchWithOrganizer = Prisma.MatchGetPayload<{ include: typeof matchInclude }>;

/**
 * O tipo de retorno vem do schema de resposta, entao o compilador garante
 * que a serializacao nunca fira o contrato publicado no OpenAPI.
 */
function serializeMatch(match: MatchWithOrganizer): MatchResponse {
  return {
    id: match.id,
    homeTeam: match.homeTeam,
    awayTeam: match.awayTeam,
    date: match.date.toISOString(),
    time: match.time,
    location: match.location,
    ticketPrice: Number(match.ticketPrice),
    ticketQuantity: match.ticketQuantity,
    status: match.status,
    organizer: match.organizer,
    createdAt: match.createdAt.toISOString(),
    updatedAt: match.updatedAt.toISOString(),
  };
}

async function assertOrganizerExists(organizerId: number) {
  const organizer = await prisma.user.findUnique({
    where: { id: organizerId },
    select: { id: true, role: true },
  });

  if (!organizer) {
    throw new AppError('Organizador não encontrado', 404);
  }

  if (organizer.role !== UserRole.ORGANIZER) {
    throw new AppError('Somente usuários com perfil ORGANIZER podem criar partidas', 403);
  }
}

export async function createMatch(data: CreateMatchInput) {
  await assertOrganizerExists(data.organizerId);

  const match = await prisma.match.create({
    data: {
      homeTeam: data.homeTeam,
      awayTeam: data.awayTeam,
      date: new Date(data.date),
      time: data.time,
      location: data.location,
      ticketPrice: data.ticketPrice,
      ticketQuantity: data.ticketQuantity,
      organizerId: data.organizerId,
    },
    include: matchInclude,
  });

  return serializeMatch(match);
}

export async function listMatches(query: ListMatchesQuery) {
  const where: Prisma.MatchWhereInput = {};

  if (query.status) {
    where.status = query.status;
  }

  if (query.organizerId) {
    where.organizerId = query.organizerId;
  }

  const matches = await prisma.match.findMany({
    where,
    orderBy: { date: 'asc' },
    include: matchInclude,
  });

  return matches.map(serializeMatch);
}

export async function findMatchById(id: number) {
  const match = await prisma.match.findUnique({
    where: { id },
    include: matchInclude,
  });

  if (!match) {
    throw new AppError('Partida não encontrada', 404);
  }

  return serializeMatch(match);
}
