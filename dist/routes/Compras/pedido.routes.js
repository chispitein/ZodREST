"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const pedidos_schema_1 = require("../../schemas/Compras/pedidos.schema");
const router = (0, express_1.Router)();
router.get('/pedidos/search', (0, get_middleware_1.getFilterTabla)('pedidos'));
router.get('/pedidos/', (0, get_middleware_1.getAllTabla)('pedidos'));
router.post('/pedidos', (0, schemaValidator_middleware_1.schemaValidation)(pedidos_schema_1.postPedidoSchema), (0, get_middleware_1.InsertRow)('pedidos'));
router.put('/pedidos/:idPedido', (0, schemaValidator_middleware_1.schemaValidation)(pedidos_schema_1.updatePedidoSchema), (0, get_middleware_1.UpdateRow)('pedidos'));
router.delete('/pedidos/:idPedido', (0, schemaValidator_middleware_1.schemaValidation)(pedidos_schema_1.deletePedidoSchema), (0, get_middleware_1.deleteRow)('pedidos'));
exports.default = router;
//# sourceMappingURL=pedido.routes.js.map