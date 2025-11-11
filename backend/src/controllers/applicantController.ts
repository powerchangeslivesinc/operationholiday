import { Request, Response } from "express";
import { Applicant } from "../models/Applicant";
import { Family } from "../models/Family";


export const createApplicant = async (req: Request, res: Response) => {
  try {
    const { name, email, family } = req.body;

    if (!name || !email || !family) {
      return res
        .status(400)
        .json({ message: "Need name, email, and family data" });
    }

    // Check if applicant already exists
    const existing = await Applicant.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Applicant already exists" });
    }

    // Create the family document first
    const newFamily = new Family(family);
    await newFamily.save();

    // Then create the applicant referencing that family
    const applicant = new Applicant({
      name,
      email,
      family: newFamily._id,
    });

    await applicant.save();

    res.status(201).json({
      message: "Applicant and Family created successfully",
      applicant,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getApplicants = async (req: Request, res: Response) => {
  try {
    // Populate the family reference
    const applicants = await Applicant.find().populate("family");
    res.status(200).json(applicants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getApplicantById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const applicant = await Applicant.findById(id).populate("family");
    if (!applicant) {
      return res.status(404).json({ message: "Applicant not found" });
    }
    res.status(200).json(applicant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};