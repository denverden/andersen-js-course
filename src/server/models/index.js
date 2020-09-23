import mongoose from 'mongoose';
import Card from './card';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const models = { Card };

export { connectDb };

export default models;
