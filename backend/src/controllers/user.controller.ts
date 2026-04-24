import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

const userService = new UserService();

export class UserController {
  async getCurrentUser(req: Request, res: Response) {
    try {
      const user = await userService.getCurrentUser();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching current user', error });
    }
  }
}
