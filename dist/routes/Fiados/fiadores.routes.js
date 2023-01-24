"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const fiadores_schema_1 = require("../../schemas/Fiados/fiadores.schema");
const router = (0, express_1.Router)();
router.get('/fiadores/search', (0, get_middleware_1.getFilterTabla)('fiadores'));
router.get('/fiadores/', (0, get_middleware_1.getAllTabla)('fiadores'));
router.post('/fiadores', (0, schemaValidator_middleware_1.schemaValidation)(fiadores_schema_1.postFiadoresSchema), (0, get_middleware_1.InsertRow)('fiadores'));
router.put('/fiadores/:idFiador', (0, schemaValidator_middleware_1.schemaValidation)(fiadores_schema_1.updateFiadoresSchema), (0, get_middleware_1.UpdateRow)('fiadores'));
router.delete('/fiadores/:idFiador', (0, schemaValidator_middleware_1.schemaValidation)(fiadores_schema_1.deleteFiadoresSchema), (0, get_middleware_1.deleteRow)('fiadores'));
exports.default = router;
//# sourceMappingURL=fiadores.routes.js.map