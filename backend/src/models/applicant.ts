import mongoose, { Schema, Document } from "mongoose";

export interface Applicant {
    //get the submission timestamp 
    submit_timestamp: Date;
    full_name: string;
    email: string;
    mobile_phone: string;

    street_address: string;
    //this one should be optional 
    apartment_num?: number;
    city: string;
    state: string;
    zip_code: number;

    applicant_age: number;
    gender: string;
    race: string;
    household_structure: string;
    //num of adults 
    num_adults: number;
    num_children: number;
    num_children_special_needs: number; 
    //variable that gets input from user 

    contact_method:  string;
    //list of 2-3 gifts 
    gifts: string[];
    //image 
    photo_id : File | string;
    //file upload of hardship 
    public_assistance: File | string;
    //yes/no answer 
    future_prog_interest: string;
    //open-ended answer 
    referral_source: string;
    //this one should be optional 
    comments?:  string;

}

//have a default method for a blank applicant
const ApplicantSchema: Schema<Applicant> = new Schema(
  {
    submit_timestamp: { type: Date, default: Date.now },
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    mobile_phone: { type: String, required: true },
    street_address: { type: String, required: true },
    apartment_num: { type: Number },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip_code: { type: Number, required: true },
    applicant_age: { type: Number, required: true },
    gender: { type: String, required: true },
    race: { type: String, required: true },
    household_structure: { type: String, required: true },
    num_adults: { type: Number, required: true },
    num_children: { type: Number, required: true },
    num_children_special_needs: { type: Number, required: true },
    contact_method: { type: String, required: true },
    gifts: [{ type: String, required: true }],
    photo_id: { type: String, required: true },
    public_assistance: { type: String, required: true },
    future_prog_interest: { type: String, required: true },
    referral_source: { type: String, required: true },
    comments: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<Applicant>("Applicant", ApplicantSchema);