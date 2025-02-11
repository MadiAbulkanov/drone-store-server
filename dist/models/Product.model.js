"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importStar(require("mongoose"));
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    brand: { type: String, required: true },
    image: { type: String, default: '' },
    topSeller: { type: Boolean, default: false },
    newProd: { type: Boolean, default: false },
    sale: { type: Boolean, default: false }
});
exports.Product = mongoose_1.default.model('Drone', ProductSchema, 'drone');
//# sourceMappingURL=Product.model.js.map