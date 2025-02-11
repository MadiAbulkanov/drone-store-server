import { Router } from 'express';
import { ProductController } from '@/controllers/product.controller';

export class ProductRoute {
  path = '/product';
  router = Router();
  private controller = new ProductController();

  constructor() {
    this.init();
  }

  private init() {
    this.router.get('/', this.controller.getProducts);
  }
}