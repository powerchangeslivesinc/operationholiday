import { Request, Response } from "express";
import fileUpload from "express-fileupload";
import { Applicant } from "../models/applicant"; 

export const createApplicant = async (req: Request, res: Response) => {
  try {
    const {
      full_name,
      email,
      mobile_phone,
      street_address,
      apartment_num,
      city,
      state,
      zip_code,
      applicant_age,
      gender,
      race,
      household_structure,
      num_adults,
      num_children,
      num_children_special_needs,
      contact_method,
      gifts,
      future_prog_interest,
      referral_source,
      comments,
    } = req.body;

    const photoId = req.files?.photo_id as fileUpload.UploadedFile;
    const publicAssistance = req.files?.public_assistance as fileUpload.UploadedFile;

    const applicant = new Applicant({
      submit_timestamp: new Date(),
      full_name,
      email,
      mobile_phone,
      street_address,
      apartment_num,
      city,
      state,
      zip_code,
      applicant_age,
      gender,
      race,
      household_structure,
      num_adults,
      num_children,
      num_children_special_needs,
      contact_method,
      gifts: Array.isArray(gifts) ? gifts : [gifts],
      future_prog_interest,
      referral_source,
      comments,
      photo_id: photoId?.name || null,
      public_assistance: publicAssistance?.name || null,
    });

    await applicant.save();
    res.status(201).json({ message: "Applicant created successfully", applicant });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

//get all the applicants 
export const getApplicants = async (req: Request, res: Response) => {
  try {
    const applicants = await Applicant.find();
    res.status(200).json(applicants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
//get applicant by id
export const getApplicantById = async (req: Request, res: Response) => {
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
};



