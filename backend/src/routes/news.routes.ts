import { Router } from 'express';
import { NewsController } from '../controllers/news.controller';

const router = Router();
const newsController = new NewsController();

router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);

export default router;
