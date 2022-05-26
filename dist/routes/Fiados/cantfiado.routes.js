"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cantfiado_controller_1 = require("../../controllers/Fiados/cantfiado.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const cantfiado_schema_1 = require("../../schemas/Fiados/cantfiado.schema");
const router = (0, express_1.Router)();
router.get('/cantfiado', cantfiado_controller_1.getCantFiado);
router.post('/cantfiado/', (0, schemaValidator_middleware_1.schemaValidation)(cantfiado_schema_1.postCantidadFiadoSchema), cantfiado_controller_1.createCantFiado);
router.put('/cantfiado/:id', (0, schemaValidator_middleware_1.schemaValidation)(cantfiado_schema_1.updateCantidadFiadoSchema), cantfiado_controller_1.updateCantFiado);
router.delete('/cantfiado/:id', (0, schemaValidator_middleware_1.schemaValidation)(cantfiado_schema_1.deleteCantidadFiadoSchema), cantfiado_controller_1.deleteCantFiado);
exports.default = router;
//# sourceMappingURL=cantfiado.routes.js.map