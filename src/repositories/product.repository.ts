import { Product, IProduct } from '@/models/Product.model';
import { FilterQuery } from 'mongoose';

export class ProductRepo {
  async getProducts(filters: Record<string, any>) {
    const query: FilterQuery<IProduct> = {};

    if (filters.type) query.type = filters.type;
    if (filters.brand) query.brand = filters.brand;
    if (filters.topSeller) query.topSeller = filters.topSeller;
    if (filters.newProd) query.newProd = filters.newProd;
    if (filters.sale) query.sale = filters.sale;

    return await Product.find(query);
  }
}