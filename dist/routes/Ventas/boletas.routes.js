"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const boletas_schema_1 = require("../../schemas/Ventas/boletas.schema");
const router = (0, express_1.Router)();
router.get('/boletas/search', (0, get_middleware_1.getFilterTabla)('boletas'));
router.get('/boletas/', (0, get_middleware_1.getAllTabla)('boletas'));
router.post('/boletas', (0, schemaValidator_middleware_1.schemaValidation)(boletas_schema_1.postBoletaSchema), (0, get_middleware_1.InsertRow)('boletas'));
router.put('/boletas/:idBoleta', (0, schemaValidator_middleware_1.schemaValidation)(boletas_schema_1.updateBoletaSchema), (0, get_middleware_1.UpdateRow)('boletas'));
router.delete('/boletas/:idBoleta', (0, schemaValidator_middleware_1.schemaValidation)(boletas_schema_1.deleteBoletaSchema), (0, get_middleware_1.deleteRow)('boletas'));
exports.default = router;
//# sourceMappingURL=boletas.routes.js.map