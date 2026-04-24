import { Request, Response } from 'express';
import { NewsService } from '../services/news.service';

const newsService = new NewsService();

export class NewsController {
  async getAllNews(req: Request, res: Response) {
    try {
      const news = await newsService.getAllNews();
      res.status(200).json(news);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching news', error });
    }
  }

  async getNewsById(req: Request, res: Response) {
    try {
      const news = await newsService.getNewsById(req.params.id as string);
      if (!news) {
        return res.status(404).json({ message: 'News not found' });
      }
      res.status(200).json(news);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching news item', error });
    }
  }
}
