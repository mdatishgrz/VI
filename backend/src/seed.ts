import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import {
  CommunityPostModel,
  VehicleCategoryModel,
  NewsStoryModel,
  MarketplaceListingModel,
  ExpertProfileModel,
  UserProfileModel
} from './models';
import {
  communityPosts,
  vehicleCategories,
  newsStories,
  marketplaceListings,
  expertProfiles,
  currentUser
} from './data/mock-db';

dotenv.config();

const seedDB = async () => {
  try {
    await connectDB();

    console.log('Clearing existing data...');
    await CommunityPostModel.deleteMany();
    await VehicleCategoryModel.deleteMany();
    await NewsStoryModel.deleteMany();
    await MarketplaceListingModel.deleteMany();
    await ExpertProfileModel.deleteMany();
    await UserProfileModel.deleteMany();

    console.log('Seeding data...');
    await CommunityPostModel.insertMany(communityPosts);
    await VehicleCategoryModel.insertMany(vehicleCategories);
    await NewsStoryModel.insertMany(newsStories);
    await MarketplaceListingModel.insertMany(marketplaceListings);
    await ExpertProfileModel.insertMany(expertProfiles);
    await UserProfileModel.create(currentUser);

    console.log('Data successfully seeded!');
    process.exit(0);
  } catch (error: any) {
    console.error(`Error with seeding: ${error.message}`);
    process.exit(1);
  }
};

seedDB();
