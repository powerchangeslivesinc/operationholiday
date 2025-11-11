import express, { Request, Response } from 'express';
import mongoose, { Schema, model, Document } from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import fileUpload from "express-fileupload";

//import the create applicant controller 
import { createApplicant, getApplicants, getApplicantById } from './src/controllers/applicantController';
import { Applicant } from './src/models/applicant';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
//add file upload middleware
app.use(fileUpload());

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
app.get('/', (req, res) => {
  res.send('✅ Backend is running and reachable!');
});
app.get('/api/messages', async (req: Request, res: Response) => {
  const messages = await Message.find();
  res.json(messages);
});

app.post('/api/messages', async (req: Request, res: Response) => {
  const newMsg = new Message({ text: req.body.text });
  await newMsg.save();
  res.json(newMsg);
});

//applicant route to create a new applicant
app.post("/api/applicants", createApplicant);

//applicant route to get all applicants
app.get("/api/applicants", async (req: Request, res: Response) => {
  try {
    const applicants = await Applicant.find();
    res.status(200).json(applicants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

//applicant route to get all applicants by id 
app.get("/api/applicants/:id", async (req: Request, res: Response) => {
  try {
    const applicant = await Applicant.findById(req.params.id);
    if (!applicant) {
      return res.status(404).json({ error: "Applicant not found" });
    }
    res.status(200).json(applicant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));

