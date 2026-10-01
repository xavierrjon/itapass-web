import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { buildOpenApiDocument } from './openapi.js';

const docsRouter = Router();
const document = buildOpenApiDocument();

docsRouter.get('/openapi.json', (_req, res) => {
  res.json(document);
});

docsRouter.use(
  '/',
  swaggerUi.serve,
  swaggerUi.setup(document, {
    customSiteTitle: 'ItaPass API',
  }),
);

export default docsRouter;
