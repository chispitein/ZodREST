"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const provedores_schema_1 = require("../../schemas/Compras/provedores.schema");
const router = (0, express_1.Router)();
router.get('/provedores/search', (0, get_middleware_1.getFilterTabla)('provedores'));
router.get('/provedores/', (0, get_middleware_1.getAllTabla)('provedores'));
router.post('/provedores', (0, schemaValidator_middleware_1.schemaValidation)(provedores_schema_1.postProvedorSchema), (0, get_middleware_1.InsertRow)('provedores'));
router.put('/provedores/:idProvedor', (0, schemaValidator_middleware_1.schemaValidation)(provedores_schema_1.updateProvedorSchema), (0, get_middleware_1.UpdateRow)('provedores'));
router.delete('/provedores/:idProvedor', (0, schemaValidator_middleware_1.schemaValidation)(provedores_schema_1.deleteProvedorSchema), (0, get_middleware_1.deleteRow)('provedores'));
exports.default = router;
//# sourceMappingURL=prov.routes.js.map