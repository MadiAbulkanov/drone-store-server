"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepo = void 0;
const Product_model_1 = require("../models/Product.model");
class ProductRepo {
    async getProducts(filters) {
        const query = {};
        if (filters.type)
            query.type = filters.type;
        if (filters.brand)
            query.brand = filters.brand;
        if (filters.topSeller)
            query.topSeller = filters.topSeller;
        if (filters.newProd)
            query.newProd = filters.newProd;
        if (filters.sale)
            query.sale = filters.sale;
        return await Product_model_1.Product.find(query);
    }
}
exports.ProductRepo = ProductRepo;
//# sourceMappingURL=product.repository.js.map