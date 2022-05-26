"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedido_controller_1 = require("../../controllers/Compras/pedido.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const pedidos_schema_1 = require("../../schemas/Compras/pedidos.schema");
const router = (0, express_1.Router)();
router.post('/pedidos', (0, schemaValidator_middleware_1.schemaValidation)(pedidos_schema_1.postPedidoSchema), pedido_controller_1.createPedido);
router.put('/pedidos/:id', (0, schemaValidator_middleware_1.schemaValidation)(pedidos_schema_1.updatePedidoSchema), pedido_controller_1.updatePedido);
router.delete('/pedidos/:id', (0, schemaValidator_middleware_1.schemaValidation)(pedidos_schema_1.deletePedidoSchema), pedido_controller_1.deletePedido);
exports.default = router;
//# sourceMappingURL=pedido.routes.js.map