import { ExpertProfileModel, IExpertProfile } from '../models/ExpertProfile';

export class ExpertService {
  async getAllExperts(): Promise<IExpertProfile[]> {
    return ExpertProfileModel.find().lean();
  }

  async getExpertById(id: string): Promise<IExpertProfile | null> {
    return ExpertProfileModel.findOne({ id }).lean();
  }
}
