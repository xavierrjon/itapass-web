import { Router } from 'express';
import * as matchController from './match.controller.js';

const matchesRouter = Router();

matchesRouter.get('/', matchController.list);
matchesRouter.post('/', matchController.create);
matchesRouter.get('/:id', matchController.show);

export default matchesRouter;
