"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detallefac_controller_1 = require("../../controllers/Compras/detallefac.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const detallefac_schema_1 = require("../../schemas/Compras/detallefac.schema");
const router = (0, express_1.Router)();
router.post('/detfacturas', (0, schemaValidator_middleware_1.schemaValidation)(detallefac_schema_1.postdetFacturaSchema), detallefac_controller_1.createDetFactura);
router.put('/detfacturas/:idFactura', (0, schemaValidator_middleware_1.schemaValidation)(detallefac_schema_1.updatedetFacturaSchema), detallefac_controller_1.updateDetFactura);
router.delete('/detfacturas/:id', (0, schemaValidator_middleware_1.schemaValidation)(detallefac_schema_1.deletedetFacturaSchema), detallefac_controller_1.deleteDetFactura);
exports.default = router;
//# sourceMappingURL=detallefact.routes.js.map