"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cors_1 = tslib_1.__importDefault(require("cors"));
const logger_1 = tslib_1.__importDefault(require("./middlewares/logger"));
const app_1 = tslib_1.__importDefault(require("./app"));
const product_route_1 = require("@/routes/product.route");
const app = new app_1.default({
    port: 8000,
    middlewares: [
        (0, logger_1.default)(),
        (0, cors_1.default)(),
    ],
    routes: [new product_route_1.ProductRoute()],
});
app.listen();
exports.default = app.app;
console.log("Server running at /api/");
//# sourceMappingURL=index.js.map