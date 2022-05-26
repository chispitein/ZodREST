"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../../controllers/Productos/product.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const product_schema_1 = require("../../schemas/Productos/product.schema");
const router = (0, express_1.Router)();
router.post('/products', (0, schemaValidator_middleware_1.schemaValidation)(product_schema_1.productSchema), product_controller_1.createproduct);
router.put('/products/:id', (0, schemaValidator_middleware_1.schemaValidation)(product_schema_1.updateProductSchema), product_controller_1.updateproduct);
router.put('/products/:id', (0, schemaValidator_middleware_1.schemaValidation)(product_schema_1.deleteProductSchema), product_controller_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=products.routes.js.map