"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const factura_schema_1 = require("../../schemas/Compras/factura.schema");
const router = (0, express_1.Router)();
router.get('/facturas/search', (0, get_middleware_1.getFilterTabla)('facturas'));
router.get('/facturas/', (0, get_middleware_1.getAllTabla)('facturas'));
router.post('/facturas', (0, schemaValidator_middleware_1.schemaValidation)(factura_schema_1.postFacturaSchema), (0, get_middleware_1.InsertRow)('facturas'));
router.put('/facturas/:idFactura', (0, schemaValidator_middleware_1.schemaValidation)(factura_schema_1.updateFacturaSchema), (0, get_middleware_1.UpdateRow)('facturas'));
router.delete('/facturas/:idFactura', (0, schemaValidator_middleware_1.schemaValidation)(factura_schema_1.deleteFacturaSchema), (0, get_middleware_1.deleteRow)('facturas'));
exports.default = router;
//# sourceMappingURL=factura.routes.js.map