import { Router } from 'express';
import communityRoutes from './community.routes';
import categoryRoutes from './category.routes';
import newsRoutes from './news.routes';
import marketplaceRoutes from './marketplace.routes';
import expertRoutes from './expert.routes';
import userRoutes from './user.routes';

import authRoutes from './auth.routes';

const router = Router();

router.use('/auth', authRoutes);

router.use('/community', communityRoutes);
router.use('/categories', categoryRoutes);
router.use('/news', newsRoutes);
router.use('/marketplace', marketplaceRoutes);
router.use('/experts', expertRoutes);
router.use('/user', userRoutes);

export default router;
