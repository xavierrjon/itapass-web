import { Router } from 'express';
import matchesRouter from '../resources/matches/match.routes.js';
import docsRouter from '../docs/docs.routes.js';

const router = Router();

router.get('/', (_req, res) => {
  res.json({ name: 'ItaPass API', version: '1.0.0' });
});

router.use('/docs', docsRouter);
router.use('/matches', matchesRouter);

export default router;
