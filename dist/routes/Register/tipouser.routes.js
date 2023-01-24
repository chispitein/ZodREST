"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const tipouser_schema_1 = require("../../schemas/Register/tipouser.schema");
const router = (0, express_1.Router)();
router.get('/tipouser/search', (0, get_middleware_1.getFilterTabla)('tipouser'));
router.get('/tipouser/', (0, get_middleware_1.getAllTabla)('tipouser'));
router.post('/tipouser', (0, schemaValidator_middleware_1.schemaValidation)(tipouser_schema_1.postTipoUserSchema), (0, get_middleware_1.InsertRow)('tipouser'));
router.put('/tipouser/:idTipoUser', (0, schemaValidator_middleware_1.schemaValidation)(tipouser_schema_1.updateTipoUserSchema), (0, get_middleware_1.UpdateRow)('tipouser'));
router.delete('/tipouser/:idTipoUser', (0, schemaValidator_middleware_1.schemaValidation)(tipouser_schema_1.deleteTipoUserSchema), (0, get_middleware_1.deleteRow)('tipouser'));
exports.default = router;
//# sourceMappingURL=tipouser.routes.js.map