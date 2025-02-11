"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const tslib_1 = require("tslib");
const multer_1 = tslib_1.__importDefault(require("multer"));
const path_1 = tslib_1.__importDefault(require("path"));
const crypto_1 = require("crypto");
const config_1 = tslib_1.__importDefault(require("@/config"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config_1.default.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, (0, crypto_1.randomUUID)() + path_1.default.extname(file.originalname));
    }
});
exports.upload = (0, multer_1.default)({ storage });
//# sourceMappingURL=multer.js.map