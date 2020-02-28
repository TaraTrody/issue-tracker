import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import config from './config/index';

import { userRouter } from './user/user.router';

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

(async () => {
  try {
    await mongoose.connect(config.db_URL, options);
    console.log('Successfully connected to MONGO database');

    const app = express();

    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.disable('x-powered-by');
    app.use(express.urlencoded({ extended: true }));

    app.use('api/v1/users', userRouter);

    app.get('/', (req, res) => {
      res.sendStatus(200);
    });

    app.listen(config.port, () => `Listening on port ${config.port_URL}`);
  } catch (err) {
    console.log(err);
  }
})();
