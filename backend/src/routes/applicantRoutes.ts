import express from "express";
import { createApplicant, getApplicants } from "../controllers/applicantController";

const router = express.Router();

router.post("/", createApplicant); // Add applicant
router.get("/", getApplicants);    // Get all applicants

export default router;
