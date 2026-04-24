import { Request, Response } from 'express';
import { MarketplaceService } from '../services/marketplace.service';

const marketplaceService = new MarketplaceService();

export class MarketplaceController {
  async getAllListings(req: Request, res: Response) {
    try {
      const listings = await marketplaceService.getAllListings();
      res.status(200).json(listings);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching marketplace listings', error });
    }
  }

  async getListingById(req: Request, res: Response) {
    try {
      const listing = await marketplaceService.getListingById(req.params.id as string);
      if (!listing) {
        return res.status(404).json({ message: 'Listing not found' });
      }
      res.status(200).json(listing);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching marketplace listing', error });
    }
  }
}
