"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const factura_controller_1 = require("../../controllers/Compras/factura.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const factura_schema_1 = require("../../schemas/Compras/factura.schema");
const router = (0, express_1.Router)();
router.post('/facturas', (0, schemaValidator_middleware_1.schemaValidation)(factura_schema_1.postFacturaSchema), factura_controller_1.createFactura);
router.put('/facturas/:id', (0, schemaValidator_middleware_1.schemaValidation)(factura_schema_1.updateFacturaSchema), factura_controller_1.updateFactura);
router.delete('/facturas/:id', (0, schemaValidator_middleware_1.schemaValidation)(factura_schema_1.deleteFacturaSchema), factura_controller_1.deleteFactura);
exports.default = router;
//# sourceMappingURL=factura.routes.js.map