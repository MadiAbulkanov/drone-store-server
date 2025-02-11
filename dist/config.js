"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const rootPath = path_1.default.resolve(__dirname, '..');
const config = {
    rootPath,
    uploadPath: path_1.default.join(rootPath, 'public/uploads')
};
exports.default = config;
//# sourceMappingURL=config.js.map