"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = require("express");
const product_controller_1 = require("@/controllers/product.controller");
class ProductRoute {
    constructor() {
        this.path = '/product';
        this.router = (0, express_1.Router)();
        this.controller = new product_controller_1.ProductController();
        this.init();
    }
    init() {
        this.router.get('/', this.controller.getProducts);
    }
}
exports.ProductRoute = ProductRoute;
//# sourceMappingURL=product.route.js.map