import { Router } from 'express';
import { CommunityController } from '../controllers/community.controller';

const router = Router();
const communityController = new CommunityController();

router.get('/', communityController.getAllPosts);
router.get('/:id', communityController.getPostById);
router.post('/', communityController.createPost);

export default router;
