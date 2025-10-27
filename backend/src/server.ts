import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import authRoutes from './routes/authRoutes';
import applicantRoutes from "./routes/applicantRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

//routes
app.use('/api/auth', authRoutes);
app.use("/api/applicants", applicantRoutes);



app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
