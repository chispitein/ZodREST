"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cajas_controller_1 = require("../../controllers/register/cajas.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const cajas_schema_1 = require("../../schemas/Register/cajas.schema");
const router = (0, express_1.Router)();
router.post('/cajas/:id', (0, schemaValidator_middleware_1.schemaValidation)(cajas_schema_1.CajaSchema), cajas_controller_1.createCaja);
router.put('/cajas/:id', (0, schemaValidator_middleware_1.schemaValidation)(cajas_schema_1.updateCajaSchema), cajas_controller_1.updateCaja);
router.delete('/cajas/:id', (0, schemaValidator_middleware_1.schemaValidation)(cajas_schema_1.deleteCajaSchema), cajas_controller_1.deleteCaja);
exports.default = router;
//# sourceMappingURL=cajas.routes.js.map