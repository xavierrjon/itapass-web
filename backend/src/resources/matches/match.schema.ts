import { z } from 'zod';
import { MatchStatus } from '../../generated/prisma/enums.js';

const teamName = z
  .string({ error: 'O nome do time é obrigatório' })
  .trim()
  .min(2, 'O nome do time deve ter ao menos 2 caracteres')
  .max(60, 'O nome do time deve ter no máximo 60 caracteres');

const date = z.iso.datetime({
  error:
    'Data e hora inválidas. Use ISO 8601 com fuso horário, ' +
    'ex.: 2026-11-15T19:30:00.000Z ou 2026-11-15T19:30:00-03:00',
  offset: true,
});

const time = z
  .string({ error: 'O horário da partida é obrigatório' })
  .trim()
  .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Horário inválido. Use o formato HH:MM');

const location = z
  .string({ error: 'O local da partida é obrigatório' })
  .trim()
  .min(3, 'O local deve ter ao menos 3 caracteres')
  .max(120, 'O local deve ter no máximo 120 caracteres');

const ticketPrice = z.coerce
  .number({ error: 'O valor do ingresso é obrigatório' })
  .positive('O valor do ingresso deve ser maior que zero')
  .max(99_999_999.99, 'O valor do ingresso é muito alto');

const ticketQuantity = z.coerce
  .number({ error: 'A quantidade de ingressos é obrigatória' })
  .int('A quantidade de ingressos deve ser um número inteiro')
  .min(1, 'A quantidade de ingressos deve ser ao menos 1')
  .max(100_000, 'A quantidade de ingressos é muito alta');

/**
 * organizerId é aceito no body apenas nesta fase.
 * A partir da autenticação (FASE 2/3) ele virá do token JWT
 * e o campo será removido do contrato de entrada.
 */
const organizerId = z.coerce
  .number({ error: 'O organizador é obrigatório' })
  .int('O organizador deve ser um número inteiro')
  .positive('O organizador deve ser um identificador válido');

export const matchStatusSchema = z.enum(MatchStatus).meta({
  id: 'MatchStatus',
  description: 'Situação atual da partida.',
});

export const createMatchSchema = z
  .object({
    homeTeam: teamName.meta({ description: 'Time do mandante.', example: 'Flamengo' }),
    awayTeam: teamName.meta({
      description: 'Time do visitante.',
      example: 'Vasco da Gama',
    }),
    date: date.meta({
      description:
        'Data e hora da partida em ISO 8601, com fuso horário obrigatório ' +
        '(ex.: 2026-11-15T19:30:00.000Z ou 2026-11-15T19:30:00-03:00).',
      example: '2026-11-15T19:30:00.000Z',
    }),
    time: time.meta({
      description: 'Horário da partida no formato HH:MM (24 horas).',
      example: '19:30',
    }),
    location: location.meta({
      description: 'Local onde a partida será realizada.',
      example: 'Estádio do Maracanã, Rio de Janeiro',
    }),
    ticketPrice: ticketPrice.meta({
      description: 'Valor do ingresso em reais.',
      example: 50,
    }),
    ticketQuantity: ticketQuantity.meta({
      description: 'Quantidade de ingressos disponíveis para a partida.',
      example: 500,
    }),
    organizerId: organizerId.meta({
      description:
        'Identificador do organizador. Temporário: será removido quando o valor vier do JWT.',
      example: 1,
    }),
  })
  .refine((data) => data.homeTeam.toLowerCase() !== data.awayTeam.toLowerCase(), {
    message: 'O time do mandante e o do visitante devem ser diferentes',
    path: ['awayTeam'],
  })
  .meta({
    id: 'CreateMatchRequest',
    description: 'Dados necessários para cadastrar uma partida.',
  });

export const listMatchesQuerySchema = z
  .object({
    status: matchStatusSchema
      .optional()
      .meta({ description: 'Filtra partidas pela situação.' }),
    organizerId: z.coerce
      .number({ error: 'Organizador inválido' })
      .int('Organizador inválido')
      .positive('Organizador inválido')
      .optional()
      .meta({ description: 'Filtra partidas de um organizador.' }),
  })
  .meta({ id: 'ListMatchesQuery' });

export const matchIdParamSchema = z
  .object({
    id: z.coerce
      .number({ error: 'Identificador de partida inválido' })
      .int('Identificador de partida inválido')
      .positive('Identificador de partida inválido'),
  })
  .meta({ id: 'MatchIdParam' });

const organizerSummarySchema = z
  .object({
    id: z.number().int().meta({ example: 1 }),
    name: z.string().meta({ example: 'Clube Teste' }),
  })
  .meta({
    id: 'OrganizerSummary',
    description: 'Dados públicos do organizador da partida.',
  });

export const matchResponseSchema = z
  .object({
    id: z.number().int().meta({ example: 1 }),
    homeTeam: z.string().meta({ example: 'Flamengo' }),
    awayTeam: z.string().meta({ example: 'Vasco da Gama' }),
    date: z.iso
      .datetime({ offset: true })
      .meta({ example: '2026-11-15T19:30:00.000Z' }),
    time: z.string().meta({ example: '19:30' }),
    location: z.string().meta({ example: 'Estádio do Maracanã, Rio de Janeiro' }),
    ticketPrice: z.number().meta({ example: 50 }),
    ticketQuantity: z.number().int().meta({ example: 500 }),
    status: matchStatusSchema,
    organizer: organizerSummarySchema,
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),
  })
  .meta({
    id: 'Match',
    description: 'Partida cadastrada.',
  });

export type CreateMatchInput = z.infer<typeof createMatchSchema>;
export type ListMatchesQuery = z.infer<typeof listMatchesQuerySchema>;
export type MatchResponse = z.infer<typeof matchResponseSchema>;
