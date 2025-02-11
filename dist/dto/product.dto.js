"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDto = void 0;
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class ProductDto {
}
exports.ProductDto = ProductDto;
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Продукт не может быть создан без названия' }),
    tslib_1.__metadata("design:type", String)
], ProductDto.prototype, "name", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Продукт не может быть создан без цены' }),
    (0, class_validator_1.IsNumber)({}, { message: 'Цена должна быть числом' }),
    tslib_1.__metadata("design:type", Number)
], ProductDto.prototype, "price", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Продукт не может быть создан без типа' }),
    tslib_1.__metadata("design:type", String)
], ProductDto.prototype, "type", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Продукт не может быть создан без бренда' }),
    tslib_1.__metadata("design:type", String)
], ProductDto.prototype, "brand", void 0);
tslib_1.__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], ProductDto.prototype, "image", void 0);
//# sourceMappingURL=product.dto.js.map