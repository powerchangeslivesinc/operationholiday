import mongoose, {Schema, Document} from 'mongoose';
export interface IApplicant extends Document {
    name: string;
    email: string;
}

const applicantSchema = new Schema<IApplicant>(
    {
        name: {type: String, required: true },
        email: {type: String, required: true, unique: true },
    }
)

export const Applicant = mongoose.model<IApplicant>('Applicant', applicantSchema)