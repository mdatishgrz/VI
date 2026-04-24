import mongoose, { Schema, Document } from 'mongoose';

export interface IMarketplaceListing extends Document {
  id: string;
  title: string;
  category: string;
  price: string;
  location: string;
  status: string;
  summary: string;
  image: string;
  tags: string[];
}

const MarketplaceListingSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, required: true },
  summary: { type: String, required: true },
  image: { type: String, required: true },
  tags: [{ type: String }]
});

export const MarketplaceListingModel = mongoose.model<IMarketplaceListing>('MarketplaceListing', MarketplaceListingSchema);
