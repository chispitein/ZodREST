"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const unidadmedida_controller_1 = require("../../controllers/Productos/unidadmedida.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const unmedida_schema_1 = require("../../schemas/Productos/unmedida.schema");
const router = (0, express_1.Router)();
router.post('/umedida', (0, schemaValidator_middleware_1.schemaValidation)(unmedida_schema_1.UnidadMedidaSchema), unidadmedida_controller_1.createUnidadMedida);
router.put('/umedida/:id', (0, schemaValidator_middleware_1.schemaValidation)(unmedida_schema_1.updateUnidadMedidaSchema), unidadmedida_controller_1.updateUnidadMedida);
router.delete('/umedida/:id', (0, schemaValidator_middleware_1.schemaValidation)(unmedida_schema_1.deleteUnidadMedidaSchema), unidadmedida_controller_1.deleteUnidadMedida);
exports.default = router;
//# sourceMappingURL=unidadmedida.routes.js.map