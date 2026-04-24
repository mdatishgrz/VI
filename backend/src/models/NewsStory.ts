import mongoose, { Schema, Document } from 'mongoose';

export interface INewsStory extends Document {
  id: string;
  title: string;
  preview: string;
  category: string;
  source: string;
  time: string;
  trending: boolean;
  image: string;
}

const NewsStorySchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  preview: { type: String, required: true },
  category: { type: String, required: true },
  source: { type: String, required: true },
  time: { type: String, required: true },
  trending: { type: Boolean, default: false },
  image: { type: String, required: true }
});

export const NewsStoryModel = mongoose.model<INewsStory>('NewsStory', NewsStorySchema);
