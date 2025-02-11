import { RequestHandler } from 'express';
import { ProductService } from '@/services/product.service';
import { IProduct } from '@/models/Product.model';

export class ProductController {
  private service = new ProductService();

  getProducts: RequestHandler = async (req, res) => {
    try {
      const { type, brand, prodClass } = req.query as Record<string, string>;
      const filters: Partial<IProduct> = {};

      if (type) filters.type = type;
      if (brand) filters.brand = brand;
      if (prodClass === 'topSeller') filters.topSeller = true;
      if (prodClass === 'newProd') filters.newProd = true;

      const products = await this.service.getProducts(filters);
      res.status(200).json(products);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
}