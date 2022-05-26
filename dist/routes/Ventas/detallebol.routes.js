"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detallebol_controller_1 = require("../../controllers/Ventas/detallebol.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const detallebol_schema_1 = require("../../schemas/Ventas/detallebol.schema");
const router = (0, express_1.Router)();
router.post('/detallebol', (0, schemaValidator_middleware_1.schemaValidation)(detallebol_schema_1.postDetalleBolSchema), detallebol_controller_1.createDetBoletas);
router.put('/detallebol/:id', (0, schemaValidator_middleware_1.schemaValidation)(detallebol_schema_1.updateDetalleBolSchema), detallebol_controller_1.updateDetBoletas);
router.delete('/detallebol/:id', (0, schemaValidator_middleware_1.schemaValidation)(detallebol_schema_1.deleteDetalleBolSchema), detallebol_controller_1.deleteDetBoletas);
exports.default = router;
//# sourceMappingURL=detallebol.routes.js.map