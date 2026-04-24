import mongoose, { Schema, Document } from 'mongoose';

export interface ISolution extends Document {
  id: string;
  author: string;
  role: string;
  verified: boolean;
  content: string;
  time: string;
  score: number;
  isBestSolution?: boolean;
}

const SolutionSchema: Schema = new Schema({
  id: { type: String, required: true },
  author: { type: String, required: true },
  role: { type: String, required: true },
  verified: { type: Boolean, default: false },
  content: { type: String, required: true },
  time: { type: String, required: true },
  score: { type: Number, default: 0 },
  isBestSolution: { type: Boolean, default: false }
});

export interface ICommunityPost extends Document {
  id: string;
  title: string;
  excerpt: string;
  description: string;
  summary: string;
  category: string;
  tags: string[];
  vehicleInfo: string;
  author: string;
  authorInitials: string;
  authorRole: string;
  verifiedAuthor?: boolean;
  score: number;
  replies: number;
  views: number;
  savedBy: number;
  time: string;
  status: 'Trending' | 'Solved' | 'Hot' | 'New';
  ownedByCurrentUser?: boolean;
  solutions: ISolution[];
}

const CommunityPostSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  description: { type: String, required: true },
  summary: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  vehicleInfo: { type: String, required: true },
  author: { type: String, required: true },
  authorInitials: { type: String, required: true },
  authorRole: { type: String, required: true },
  verifiedAuthor: { type: Boolean, default: false },
  score: { type: Number, default: 0 },
  replies: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  savedBy: { type: Number, default: 0 },
  time: { type: String, required: true },
  status: { type: String, enum: ['Trending', 'Solved', 'Hot', 'New'], default: 'New' },
  ownedByCurrentUser: { type: Boolean, default: false },
  solutions: [SolutionSchema]
});

export const CommunityPostModel = mongoose.model<ICommunityPost>('CommunityPost', CommunityPostSchema);
