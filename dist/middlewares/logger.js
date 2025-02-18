"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = () => (req, res, next) => {
    console.log(`Request logged: ${req.method}, ${req.path}`);
    next();
};
exports.default = logger;
//# sourceMappingURL=logger.js.map