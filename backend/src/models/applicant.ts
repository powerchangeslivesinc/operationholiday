import mongoose, { Schema, Document } from "mongoose";

export interface IApplicant extends Document {
  full_name: string;
  email: string;
  mobile_phone: string;
  street_address: string;
  apartment_num?: string;
  city: string;
  state: string;
  zip_code: string;
  applicant_age: number;
  gender: string;
  race: string;
  household_structure: string;
  num_adults: number;
  num_children: number;
  num_children_special_needs: number;
  contact_method: string;
  gifts: string[];
  future_prog_interest?: string;
  referral_source?: string;
  comments?: string;
  photo_id?: string;
  public_assistance?: string;
  submit_timestamp: Date;
  adoption_status: "up_for_adoption" | "adopted";
}

const ApplicantSchema = new Schema<IApplicant>({
  full_name: String,
  email: String,
  mobile_phone: String,
  street_address: String,
  apartment_num: String,
  city: String,
  state: String,
  zip_code: String,
  applicant_age: Number,
  gender: String,
  race: String,
  household_structure: String,
  num_adults: Number,
  num_children: Number,
  num_children_special_needs: Number,
  contact_method: String,
  gifts: [String],
  future_prog_interest: String,
  referral_source: String,
  comments: String,
  photo_id: String,
  public_assistance: String,
  submit_timestamp: { type: Date, default: Date.now },

  //new field: save whether they're adopted or not 
  adoption_status: {
    type: String,
    enum: ["up_for_adoption", "adopted"],
    default: "up_for_adoption",
  },
});

export const Applicant = mongoose.model<IApplicant>("Applicant", ApplicantSchema);
