import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error.message);
    process.exit(1);
  }
}
