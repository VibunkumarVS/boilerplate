import express, { Express } from 'express';

export const start = (): Express => {
  const app = express();
  const port = 4000;

  app.listen({ port });
  console.log(`Server started at port ${port}`);

  return app;
};

start();
export default start;
