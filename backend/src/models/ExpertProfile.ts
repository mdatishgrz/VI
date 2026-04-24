import mongoose, { Schema, Document } from 'mongoose';

export interface IExpertProfile extends Document {
  id: string;
  name: string;
  initials: string;
  specialty: string;
  location: string;
  responseTime: string;
  helpfulRate: string;
  bio: string;
  featured?: boolean;
}

const ExpertProfileSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  initials: { type: String, required: true },
  specialty: { type: String, required: true },
  location: { type: String, required: true },
  responseTime: { type: String, required: true },
  helpfulRate: { type: String, required: true },
  bio: { type: String, required: true },
  featured: { type: Boolean, default: false }
});

export const ExpertProfileModel = mongoose.model<IExpertProfile>('ExpertProfile', ExpertProfileSchema);
