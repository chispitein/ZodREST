"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const estadouser_schema_1 = require("../../schemas/Register/estadouser.schema");
const router = (0, express_1.Router)();
router.get('/estadouser/search', (0, get_middleware_1.getFilterTabla)('estadouser'));
router.get('/estadouser/', (0, get_middleware_1.getAllTabla)('estadouser'));
router.post('/estadouser', (0, schemaValidator_middleware_1.schemaValidation)(estadouser_schema_1.postEstadoUserSchema), (0, get_middleware_1.InsertRow)('estadouser'));
router.put('/estadouser/:idEstadoUser', (0, schemaValidator_middleware_1.schemaValidation)(estadouser_schema_1.updateEstadoUserSchema), (0, get_middleware_1.UpdateRow)('estadouser'));
router.delete('/estadouser/:idEstadoUser', (0, schemaValidator_middleware_1.schemaValidation)(estadouser_schema_1.deleteEstadoUserSchema), (0, get_middleware_1.deleteRow)('estadouser'));
exports.default = router;
//# sourceMappingURL=estadouser.routes.js.map