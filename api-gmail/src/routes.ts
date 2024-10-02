import express from 'express';

export const routes = express.Router();

//Live route
routes.get('/', (req, res) => {
  return res.status(200).send('HTTP server running!');
});

routes.get('/gmail/emails', (req, res) => {
  const emails: any [] = [];

  return res.status(200).send({
    emails,
  });
});
