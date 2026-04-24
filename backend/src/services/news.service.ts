import { NewsStoryModel, INewsStory } from '../models/NewsStory';

export class NewsService {
  async getAllNews(): Promise<INewsStory[]> {
    return NewsStoryModel.find().lean();
  }

  async getNewsById(id: string): Promise<INewsStory | null> {
    return NewsStoryModel.findOne({ id }).lean();
  }
}
