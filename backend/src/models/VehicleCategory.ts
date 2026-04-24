import mongoose, { Schema, Document } from 'mongoose';

export interface IVehicleCategory extends Document {
  slug: string;
  name: string;
  shortLabel: string;
  description: string;
  headline: string;
  metric: string;
  overview: string;
  trendingTopic: string;
  commonIssue: string;
  highlights: string[];
  guides: string[];
}

const VehicleCategorySchema: Schema = new Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  shortLabel: { type: String, required: true },
  description: { type: String, required: true },
  headline: { type: String, required: true },
  metric: { type: String, required: true },
  overview: { type: String, required: true },
  trendingTopic: { type: String, required: true },
  commonIssue: { type: String, required: true },
  highlights: [{ type: String }],
  guides: [{ type: String }]
});

export const VehicleCategoryModel = mongoose.model<IVehicleCategory>('VehicleCategory', VehicleCategorySchema);
