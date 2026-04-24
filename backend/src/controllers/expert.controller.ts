import { Request, Response } from 'express';
import { ExpertService } from '../services/expert.service';

const expertService = new ExpertService();

export class ExpertController {
  async getAllExperts(req: Request, res: Response) {
    try {
      const experts = await expertService.getAllExperts();
      res.status(200).json(experts);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching experts', error });
    }
  }

  async getExpertById(req: Request, res: Response) {
    try {
      const expert = await expertService.getExpertById(req.params.id as string);
      if (!expert) {
        return res.status(404).json({ message: 'Expert not found' });
      }
      res.status(200).json(expert);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching expert', error });
    }
  }
}
