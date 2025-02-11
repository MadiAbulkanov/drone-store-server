import { ProductRepo } from '@/repositories/product.repository';
import { IProduct } from '@/models/Product.model';

export class ProductService {
  private repository = new ProductRepo();

  async getProducts(filters: Partial<IProduct>) {
    return await this.repository.getProducts(filters);
  }
}