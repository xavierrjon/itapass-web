import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
  type RouteConfig,
} from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
import { errorResponseSchema } from '../schemas/error.schema.js';
import {
  createMatchSchema,
  listMatchesQuerySchema,
  matchIdParamSchema,
  matchResponseSchema,
} from '../resources/matches/match.schema.js';

export const registry = new OpenAPIRegistry();

const errorResponse = {
  description: 'Erro',
  content: {
    'application/json': {
      schema: errorResponseSchema,
    },
  },
};

const matchesRoutes: RouteConfig[] = [
  {
    method: 'get',
    path: '/matches',
    tags: ['Matches'],
    summary: 'Lista partidas',
    description:
      'Retorna as partidas cadastradas, ordenadas da mais antiga para a mais recente.',
    request: {
      query: listMatchesQuerySchema,
    },
    responses: {
      200: {
        description: 'Lista de partidas.',
        content: {
          'application/json': {
            schema: z.array(matchResponseSchema),
          },
        },
      },
      422: errorResponse,
    },
  },
  {
    method: 'post',
    path: '/matches',
    tags: ['Matches'],
    summary: 'Cadastra uma partida',
    description:
      'Cria uma partida. Exige um organizador existente com perfil ORGANIZER. ' +
      'Até a autenticação entrar em vigor, o organizador é informado no corpo da requisição.',
    request: {
      body: {
        content: {
          'application/json': {
            schema: createMatchSchema,
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Partida criada.',
        content: {
          'application/json': {
            schema: matchResponseSchema,
          },
        },
      },
      403: errorResponse,
      404: errorResponse,
      422: errorResponse,
    },
  },
  {
    method: 'get',
    path: '/matches/{id}',
    tags: ['Matches'],
    summary: 'Detalha uma partida',
    responses: {
      200: {
        description: 'Partida encontrada.',
        content: {
          'application/json': {
            schema: matchResponseSchema,
          },
        },
      },
      404: errorResponse,
      422: errorResponse,
    },
    request: {
      params: matchIdParamSchema,
    },
  },
];

for (const route of matchesRoutes) {
  registry.registerPath(route);
}

registry.registerPath({
  method: 'get',
  path: '/',
  tags: ['Meta'],
  summary: 'Informações da API',
  responses: {
    200: {
      description: 'Nome e versão da API.',
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().meta({ example: 'ItaPass API' }),
              version: z.string().meta({ example: '1.0.0' }),
            })
            .meta({ id: 'ApiInfo' }),
        },
      },
    },
  },
});

const generator = new OpenApiGeneratorV3(registry.definitions);

export function buildOpenApiDocument() {
  return generator.generateDocument({
    openapi: '3.0.3',
    info: {
      title: 'ItaPass API',
      version: '1.0.0',
      description: [
        'API do ItaPass, sistema de venda de ingressos para partidas de futebol local.',
        '',
        'Perfis de acesso: `ORGANIZER` (gerencia partidas e valida ingressos) e',
        '`FAN` (consulta partidas e compra ingressos).',
        '',
        'Todas as entradas sao validadas no backend. O frontend nunca decide',
        'autorizacao nem validade de ingresso.',
      ].join('\n'),
    },
    servers: [{ url: '/', description: 'API' }],
    tags: [
      { name: 'Meta', description: 'Informações da API.' },
      { name: 'Matches', description: 'Partidas.' },
    ],
  });
}
