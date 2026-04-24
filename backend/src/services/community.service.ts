import { CommunityPostModel, ICommunityPost } from '../models/CommunityPost';

export class CommunityService {
  async getAllPosts(): Promise<ICommunityPost[]> {
    return CommunityPostModel.find().lean();
  }

  async getPostById(id: string): Promise<ICommunityPost | null> {
    return CommunityPostModel.findOne({ id }).lean();
  }

  async createPost(data: Partial<ICommunityPost>): Promise<ICommunityPost> {
    const postCount = await CommunityPostModel.countDocuments();
    
    const newPost = new CommunityPostModel({
      id: String(postCount + 1),
      title: data.title || '',
      excerpt: data.excerpt || '',
      description: data.description || '',
      summary: data.summary || '',
      category: data.category || 'General',
      tags: data.tags || [],
      vehicleInfo: data.vehicleInfo || '',
      author: data.author || 'Anonymous',
      authorInitials: data.authorInitials || 'AN',
      authorRole: data.authorRole || 'User',
      score: 0,
      replies: 0,
      views: 0,
      savedBy: 0,
      time: 'Just now',
      status: 'New',
      solutions: [],
      ...data
    });

    return newPost.save();
  }
}
