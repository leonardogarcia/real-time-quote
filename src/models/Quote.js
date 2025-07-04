import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  prompt: { type: String, required: true },
  response: { type: String, required: true },
  timestamp: { type: Date, required: true }
}, { versionKey: false });


const Quote = mongoose.model('Quote', quoteSchema);
export default Quote;
