import type { Request, Response } from 'express';
import * as matchService from './match.service.js';
import {
  createMatchSchema,
  listMatchesQuerySchema,
  matchIdParamSchema,
} from './match.schema.js';
import { validateRequest } from '../../utils/validateRequest.js';

export async function create(request: Request, response: Response) {
  const body = validateRequest(createMatchSchema, request.body);

  const match = await matchService.createMatch(body);

  response.status(201).json(match);
}

export async function list(request: Request, response: Response) {
  const query = validateRequest(listMatchesQuerySchema, request.query);

  const matches = await matchService.listMatches(query);

  response.json(matches);
}

export async function show(request: Request, response: Response) {
  const { id } = validateRequest(matchIdParamSchema, request.params);

  const match = await matchService.findMatchById(id);

  response.json(match);
}
