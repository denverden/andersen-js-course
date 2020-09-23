import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cardRoutes from './routes/card';
import models, { connectDb } from './models';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.context = {
    models,
  };
  next();
});

app.use('/cards', cardRoutes);

app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

connectDb().then(async () => {
  app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT || 3030}!`));
});
