import { Router } from 'express';
import { MarketplaceController } from '../controllers/marketplace.controller';

const router = Router();
const marketplaceController = new MarketplaceController();

router.get('/', marketplaceController.getAllListings);
router.get('/:id', marketplaceController.getListingById);

export default router;
