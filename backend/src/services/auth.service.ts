import { UserProfileModel, IUserProfile } from '../models/UserProfile';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class AuthService {
  private generateToken(id: string) {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'secret123', {
      expiresIn: '30d',
    });
  }

  async registerUser(data: Partial<IUserProfile>) {
    const userExists = await UserProfileModel.findOne({ email: data.email });

    if (userExists) {
      throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password || 'password123', salt);

    const user = await UserProfileModel.create({
      name: data.name,
      initials: data.name ? data.name.substring(0, 2).toUpperCase() : 'US',
      handle: data.handle || `@${data.name?.replace(/\s/g, '').toLowerCase()}`,
      email: data.email,
      password: hashedPassword,
      location: data.location || 'Unknown',
      role: data.role || 'Member',
      joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      streak: 0,
      reputation: 'New',
      points: 0,
      solutions: 0,
      savedItems: 0,
      bio: data.bio || 'New member',
      profileImage: data.profileImage || '/placeholder-user.jpg'
    });

    if (user) {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        handle: user.handle,
        profileImage: user.profileImage,
        token: this.generateToken(user._id.toString()),
      };
    } else {
      throw new Error('Invalid user data');
    }
  }

  async loginUser(email: string, password?: string) {
    const user = await UserProfileModel.findOne({ email });

    if (user && user.password && (await bcrypt.compare(password || '', user.password))) {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        handle: user.handle,
        profileImage: user.profileImage,
        token: this.generateToken(user._id.toString()),
      };
    } else {
      throw new Error('Invalid email or password');
    }
  }

  async getUserProfile(id: string) {
    const user = await UserProfileModel.findById(id).select('-password');
    if (user) {
      return user;
    } else {
      throw new Error('User not found');
    }
  }

  async updateUserProfile(id: string, data: Partial<IUserProfile>) {
    const user = await UserProfileModel.findById(id);

    if (user) {
      user.name = data.name || user.name;
      user.email = data.email || user.email;
      user.location = data.location || user.location;
      user.bio = data.bio || user.bio;
      
      if (data.profileImage) {
        user.profileImage = data.profileImage;
      }

      if (data.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(data.password, salt);
      }

      const updatedUser = await user.save();

      return {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        handle: updatedUser.handle,
        profileImage: updatedUser.profileImage,
        token: this.generateToken(updatedUser._id.toString()),
      };
    } else {
      throw new Error('User not found');
    }
  }
}
