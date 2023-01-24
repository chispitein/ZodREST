"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const unmedida_schema_1 = require("../../schemas/Productos/unmedida.schema");
const router = (0, express_1.Router)();
router.get('/unidadmedidas/search', (0, get_middleware_1.getFilterTabla)('unidadmedidas'));
router.get('/unidadmedidas/', (0, get_middleware_1.getAllTabla)('unidadmedidas'));
router.post('/unidadmedidas', (0, schemaValidator_middleware_1.schemaValidation)(unmedida_schema_1.postUnidadMedidaSchema), (0, get_middleware_1.InsertRow)('unidadmedidas'));
router.put('/unidadmedidas/:idUnidadMedida', (0, schemaValidator_middleware_1.schemaValidation)(unmedida_schema_1.updateUnidadMedidaSchema), (0, get_middleware_1.UpdateRow)('unidadmedidas'));
router.delete('/unidadmedidas/:idUnidadMedida', (0, schemaValidator_middleware_1.schemaValidation)(unmedida_schema_1.deleteUnidadMedidaSchema), (0, get_middleware_1.deleteRow)('unidadmedidas'));
exports.default = router;
//# sourceMappingURL=unidadmedida.routes.js.map