"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detPedidos_controller_1 = require("../../controllers/Compras/detPedidos.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const detalleped_schema_1 = require("../../schemas/Compras/detalleped.schema");
const router = (0, express_1.Router)();
router.post('/detpedidos', (0, schemaValidator_middleware_1.schemaValidation)(detalleped_schema_1.postdetPedidoSchema), detPedidos_controller_1.createDetPedidos);
router.put('/detpedidos/:id', (0, schemaValidator_middleware_1.schemaValidation)(detalleped_schema_1.updatedetPedidoSchema), detPedidos_controller_1.updateDetPedidos);
router.delete('/detpedidos/:id', (0, schemaValidator_middleware_1.schemaValidation)(detalleped_schema_1.deletedetPedidoSchema), detPedidos_controller_1.deleteDetPedidos);
exports.default = router;
//# sourceMappingURL=detalleped.routes.js.map