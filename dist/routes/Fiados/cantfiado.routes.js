"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const cantfiado_schema_1 = require("../../schemas/Fiados/cantfiado.schema");
const router = (0, express_1.Router)();
router.get('/cantidadfiado/search', (0, get_middleware_1.getFilterTabla)('cantidadfiado'));
router.get('/cantidadfiado/', (0, get_middleware_1.getAllTabla)('cantidadfiado'));
router.post('/cantidadfiado', (0, schemaValidator_middleware_1.schemaValidation)(cantfiado_schema_1.postCantidadFiadoSchema), (0, get_middleware_1.InsertRow)('cantidadfiado'));
router.put('/cantidadfiado/:idCantidadFiado', (0, schemaValidator_middleware_1.schemaValidation)(cantfiado_schema_1.updateCantidadFiadoSchema), (0, get_middleware_1.UpdateRow)('cantidadfiado'));
router.delete('/cantidadfiado/:idCantidadFiado', (0, schemaValidator_middleware_1.schemaValidation)(cantfiado_schema_1.deleteCantidadFiadoSchema), (0, get_middleware_1.deleteRow)('cantidadfiado'));
exports.default = router;
//# sourceMappingURL=cantfiado.routes.js.map