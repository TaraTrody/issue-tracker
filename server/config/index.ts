import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT,
  db_URL: process.env.MONGO_URL,
  port_URL: process.env.PORT_URL,
};
