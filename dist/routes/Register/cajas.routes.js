"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const cajas_schema_1 = require("../../schemas/Register/cajas.schema");
const router = (0, express_1.Router)();
router.get('/cajas/search', (0, get_middleware_1.getFilterTabla)('cajas'));
router.get('/cajas/', (0, get_middleware_1.getAllTabla)('cajas'));
router.post('/cajas', (0, schemaValidator_middleware_1.schemaValidation)(cajas_schema_1.postCajaSchema), (0, get_middleware_1.InsertRow)('cajas'));
router.put('/cajas/:idCaja', (0, schemaValidator_middleware_1.schemaValidation)(cajas_schema_1.updateCajaSchema), (0, get_middleware_1.UpdateRow)('cajas'));
router.delete('/cajas/:idCaja', (0, schemaValidator_middleware_1.schemaValidation)(cajas_schema_1.deleteCajaSchema), (0, get_middleware_1.deleteRow)('cajas'));
exports.default = router;
//# sourceMappingURL=cajas.routes.js.map