"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const register_schema_1 = require("../../schemas/Register/register.schema");
const router = (0, express_1.Router)();
router.get('/usuarios/search', (0, get_middleware_1.getFilterTabla)('usuarios'));
router.get('/usuarios/', (0, get_middleware_1.getAllTabla)('usuarios'));
router.post('/usuarios', (0, schemaValidator_middleware_1.schemaValidation)(register_schema_1.postUserSchema), (0, get_middleware_1.InsertRow)('usuarios'));
router.put('/usuarios/:idUser', (0, schemaValidator_middleware_1.schemaValidation)(register_schema_1.updateUserSchema), (0, get_middleware_1.UpdateRow)('usuarios'));
router.delete('/usuarios/:idUser', (0, schemaValidator_middleware_1.schemaValidation)(register_schema_1.deleteUserSchema), (0, get_middleware_1.deleteRow)('usuarios'));
exports.default = router;
//# sourceMappingURL=register.routes.js.map