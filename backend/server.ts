import express, { Request, Response } from 'express';
import mongoose, { Schema, model, Document } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mydb')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error(err));

// Schema & Model
interface IMessage {
  text: string;
}
interface IMessageDoc extends IMessage, Document {}

const messageSchema = new Schema<IMessageDoc>({
  text: { type: String, required: true }
});

const Message = model<IMessageDoc>('Message', messageSchema);

// Routes
app.get('/api/messages', async (req: Request, res: Response) => {
  const messages = await Message.find();
  res.json(messages);
});

app.post('/api/messages', async (req: Request, res: Response) => {
  const newMsg = new Message({ text: req.body.text });
  await newMsg.save();
  res.json(newMsg);
});

app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
