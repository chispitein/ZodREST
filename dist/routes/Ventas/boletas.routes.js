"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const boletas_controller_1 = require("../../controllers/Ventas/boletas.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const boletas_schema_1 = require("../../schemas/Ventas/boletas.schema");
const router = (0, express_1.Router)();
router.post('/boletass', (0, schemaValidator_middleware_1.schemaValidation)(boletas_schema_1.postBoletaSchema), boletas_controller_1.createBoletas);
router.put('/boletas/:id', (0, schemaValidator_middleware_1.schemaValidation)(boletas_schema_1.updateBoletaSchema), boletas_controller_1.updateBoletas);
router.delete('/boletas/:id', (0, schemaValidator_middleware_1.schemaValidation)(boletas_schema_1.deleteBoletaSchema), boletas_controller_1.deleteBoletas);
exports.default = router;
//# sourceMappingURL=boletas.routes.js.map