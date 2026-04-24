import { MarketplaceListingModel, IMarketplaceListing } from '../models/MarketplaceListing';

export class MarketplaceService {
  async getAllListings(): Promise<IMarketplaceListing[]> {
    return MarketplaceListingModel.find().lean();
  }

  async getListingById(id: string): Promise<IMarketplaceListing | null> {
    return MarketplaceListingModel.findOne({ id }).lean();
  }
}
