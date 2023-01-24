"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const history_schema_1 = require("../../schemas/Productos/history.schema");
const router = (0, express_1.Router)();
router.get('/historial/search', (0, get_middleware_1.getFilterTabla)('historial'));
router.get('/historial/', (0, get_middleware_1.getAllTabla)('historial'));
router.post('/historial', (0, schemaValidator_middleware_1.schemaValidation)(history_schema_1.postHistorySchema), (0, get_middleware_1.InsertRow)('historial'));
router.put('/historial/:idHistorial', (0, schemaValidator_middleware_1.schemaValidation)(history_schema_1.updateHistorySchema), (0, get_middleware_1.UpdateRow)('historial'));
router.delete('/historial/:idHistorial', (0, schemaValidator_middleware_1.schemaValidation)(history_schema_1.deleteHistorySchema), (0, get_middleware_1.deleteRow)('historial'));
exports.default = router;
//# sourceMappingURL=history.routes.js.map