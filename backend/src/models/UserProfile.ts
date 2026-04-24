import mongoose, { Schema, Document } from 'mongoose';

export interface IUserProfile extends Document {
  name: string;
  initials: string;
  handle: string;
  email: string;
  password?: string;
  profileImage?: string;
  location: string;
  role: string;
  joinDate: string;
  streak: number;
  reputation: string;
  points: number;
  solutions: number;
  savedItems: number;
  bio: string;
}

const UserProfileSchema: Schema = new Schema({
  name: { type: String, required: true },
  initials: { type: String, required: true },
  handle: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  profileImage: { type: String },
  location: { type: String, required: true },
  role: { type: String, required: true },
  joinDate: { type: String, required: true },
  streak: { type: Number, default: 0 },
  reputation: { type: String, required: true },
  points: { type: Number, default: 0 },
  solutions: { type: Number, default: 0 },
  savedItems: { type: Number, default: 0 },
  bio: { type: String, required: true }
});

export const UserProfileModel = mongoose.model<IUserProfile>('UserProfile', UserProfileSchema);
