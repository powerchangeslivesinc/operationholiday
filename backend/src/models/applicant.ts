import mongoose, {Schema, Document} from 'mongoose';
import { Family, IFamily } from "./Family";
export interface IApplicant extends Document {
    name: string;
    email: string;
    family: mongoose.Types.ObjectId | IFamily;
}

const applicantSchema = new Schema<IApplicant>(
    {
        name: {type: String, required: true },
        email: {type: String, required: true, unique: true },
        family: {type: Schema.Types.ObjectId, ref: "Family"}
    }
)

export const Applicant = mongoose.model<IApplicant>('Applicant', applicantSchema)
