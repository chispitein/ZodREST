"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoventas_controller_1 = require("../../controllers/Ventas/tipoventas.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const tipoventas_schema_1 = require("../../schemas/Ventas/tipoventas.schema");
const router = (0, express_1.Router)();
router.post('/tipoventa', (0, schemaValidator_middleware_1.schemaValidation)(tipoventas_schema_1.postTipoVentaSchema), tipoventas_controller_1.createTipoVenta);
router.put('/tipoventa/:id', (0, schemaValidator_middleware_1.schemaValidation)(tipoventas_schema_1.updateTipoVentaSchema), tipoventas_controller_1.updateTipoVenta);
router.delete('/tipoventa/:id', (0, schemaValidator_middleware_1.schemaValidation)(tipoventas_schema_1.deleteTipoVentarSchema), tipoventas_controller_1.deleteTipoVenta);
exports.default = router;
//# sourceMappingURL=tipoventas.routes.js.map