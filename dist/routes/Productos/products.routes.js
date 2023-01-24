"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const product_schema_1 = require("../../schemas/Productos/product.schema");
const router = (0, express_1.Router)();
router.get('/productos/search', (0, get_middleware_1.getFilterTabla)('productos'));
router.get('/productos/', (0, get_middleware_1.getAllTabla)('productos'));
router.post('/productos', (0, schemaValidator_middleware_1.schemaValidation)(product_schema_1.postProductSchema), (0, get_middleware_1.InsertRow)('productos'));
router.put('/productos/:idProdCodigo', (0, schemaValidator_middleware_1.schemaValidation)(product_schema_1.updateProductSchema), (0, get_middleware_1.UpdateRow)('productos'));
router.delete('/productos/:idProdCodigo', (0, schemaValidator_middleware_1.schemaValidation)(product_schema_1.deleteProductSchema), (0, get_middleware_1.deleteRow)('productos'));
exports.default = router;
//# sourceMappingURL=products.routes.js.map