import { UserProfileModel, IUserProfile } from '../models/UserProfile';

export class UserService {
  async getCurrentUser(): Promise<IUserProfile | null> {
    // Assuming there's only one user right now, or fetching a specific email
    return UserProfileModel.findOne({ email: 'aria@autoverse.com' }).lean();
  }
}
