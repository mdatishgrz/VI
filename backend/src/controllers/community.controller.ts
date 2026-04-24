import { Request, Response } from 'express';
import { CommunityService } from '../services/community.service';

const communityService = new CommunityService();

export class CommunityController {
  async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await communityService.getAllPosts();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching community posts', error });
    }
  }

  async getPostById(req: Request, res: Response) {
    try {
      const post = await communityService.getPostById(req.params.id as string);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching community post', error });
    }
  }

  async createPost(req: Request, res: Response) {
    try {
      const newPost = await communityService.createPost(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ message: 'Error creating community post', error });
    }
  }
}
