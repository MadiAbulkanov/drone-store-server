"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../services/product.service");
class ProductController {
    constructor() {
        this.service = new product_service_1.ProductService();
        this.getProducts = async (req, res) => {
            try {
                const { type, brand, prodClass } = req.query;
                const filters = {};
                if (type)
                    filters.type = type;
                if (brand)
                    filters.brand = brand;
                if (prodClass === 'topSeller')
                    filters.topSeller = true;
                if (prodClass === 'newProd')
                    filters.newProd = true;
                const products = await this.service.getProducts(filters);
                res.status(200).json(products);
            }
            catch (error) {
                console.error('Error:', error);
                res.status(500).json({ message: 'Internal server error' });
            }
        };
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map