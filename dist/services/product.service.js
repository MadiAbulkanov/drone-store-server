"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_repository_1 = require("../repositories/product.repository");
class ProductService {
    constructor() {
        this.repository = new product_repository_1.ProductRepo();
    }
    async getProducts(filters) {
        return await this.repository.getProducts(filters);
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map