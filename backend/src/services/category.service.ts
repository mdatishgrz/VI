import { VehicleCategoryModel, IVehicleCategory } from '../models/VehicleCategory';

export class CategoryService {
  async getAllCategories(): Promise<IVehicleCategory[]> {
    return VehicleCategoryModel.find().lean();
  }

  async getCategoryBySlug(slug: string): Promise<IVehicleCategory | null> {
    return VehicleCategoryModel.findOne({ slug }).lean();
  }
}
