import { z } from 'zod';

/**
 * Contrato de erro da API.
 * Formato unico em todas as respostas de erro (guide, secao de Tratamento
 * de erros) e nunca deve conter stack trace, senha ou dados internos.
 */
export const errorResponseSchema = z
  .object({
    message: z.string().meta({ description: 'Mensagem de erro legível.' }),
  })
  .meta({
    id: 'Error',
    description: 'Resposta de erro da API.',
  });
