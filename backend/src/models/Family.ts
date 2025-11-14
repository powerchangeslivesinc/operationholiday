import mongoose, { Schema, Document, Model } from "mongoose";

// --- Subdocument types ---
export interface HeadOfHousehold {
  sex: string;
  age: number;
  clothing_size: string;
  shoe_size: string;
  wish_list: string;
}

export interface Member {
  role: string;
  sex: string;
  age: number;
  clothing_size: string;
  shoe_size: string;
  wish_list: string;
}

// --- Main Family interface ---
export interface IFamily extends Document {
  title: string;
  adopted: boolean;
  background: string;
  why_help: string;
  location: string;
  household_size: number;
  head_of_household: HeadOfHousehold;
  members: Member[];
}
const HeadOfHouseholdSchema = new Schema<HeadOfHousehold>({
  sex: { type: String, required: true },
  age: { type: Number, required: true },
  clothing_size: { type: String, required: true },
  shoe_size: { type: String, required: true },
  wish_list: { type: String, required: true },
});

const MemberSchema = new Schema<Member>({
  role: { type: String, required: true },
  sex: { type: String, required: true },
  age: { type: Number, required: true },
  clothing_size: { type: String, required: true },
  shoe_size: { type: String, required: true },
  wish_list: { type: String, required: true },
});

const FamilySchema = new Schema<IFamily>(
  {
    title: { type: String, required: true },
    adopted: { type: Boolean, default: false },
    background: { type: String, required: true },
    why_help: { type: String, required: true },
    location: { type: String, required: true },
    household_size: { type: Number, required: true },
    head_of_household: { type: HeadOfHouseholdSchema, required: true },
    members: { type: [MemberSchema], default: [] },
  },
  {
    timestamps: true,
  }
);

// --- Export model ---
export const Family: Model<IFamily> =
  mongoose.models.Family || mongoose.model<IFamily>("Family", FamilySchema);