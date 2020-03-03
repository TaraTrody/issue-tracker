import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import config from './config/index';
import session from 'express-session'
const MongoStore = require('connect-mongo')(session)
import uid from 'uid-safe';

import auth from './middlewares/passport-local'
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
  
    app.use(session({
      name: 'issue-tracker.sid',
      secret: uid.sync(18),
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 14 * 24 * 60 * 60,
      }),
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        maxAge: 14 * 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === 'production'
      },
    }))

    app.use(auth.initialize);
    app.use(auth.session)

    app.use('/api/v1/user', userRouter)

    app.get('/', (req, res) => {
      res.sendStatus(200);
    });

    app.listen(config.port, () => `Listening on port ${config.port_URL}`);
  } catch (err) {
    console.log(err);
  }
})();
