"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const provedor_controller_1 = require("../../controllers/Compras/provedor.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const provedores_schema_1 = require("../../schemas/Compras/provedores.schema");
const router = (0, express_1.Router)();
router.post('/provedores', (0, schemaValidator_middleware_1.schemaValidation)(provedores_schema_1.postProvedorSchema), provedor_controller_1.createProvedor);
router.put('/provedores/:id', (0, schemaValidator_middleware_1.schemaValidation)(provedores_schema_1.updateProvedorSchema), provedor_controller_1.updateProvedor);
router.delete('/provedores/:id', (0, schemaValidator_middleware_1.schemaValidation)(provedores_schema_1.deleteProvedorSchema), provedor_controller_1.deleteProvedor);
exports.default = router;
//# sourceMappingURL=prov.routes.js.map