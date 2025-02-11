"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const express_1 = tslib_1.__importDefault(require("express"));
const mongoConfig_1 = tslib_1.__importDefault(require("./config/mongoConfig"));
class App {
    constructor(appInit) {
        this.app = (0, express_1.default)();
        this.port = appInit.port;
        this.initAssets();
        this.initMiddlewares(appInit.middlewares);
        this.initRoutes(appInit.routes);
    }
    initMiddlewares(middlewares) {
        middlewares.forEach((middleware) => {
            this.app.use(middleware);
        });
    }
    initRoutes(routes) {
        routes.forEach((route) => {
            this.app.use(`/api${route.path}`, route.router);
        });
    }
    initAssets() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    async listen() {
        await (0, mongoConfig_1.default)();
        return this.app.listen(this.port, () => {
            console.log(`App listening  on the http://localhost:${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map