import { Router } from 'express';
import { ExpertController } from '../controllers/expert.controller';

const router = Router();
const expertController = new ExpertController();

router.get('/', expertController.getAllExperts);
router.get('/:id', expertController.getExpertById);

export default router;
