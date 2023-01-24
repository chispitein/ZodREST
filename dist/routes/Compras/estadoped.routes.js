"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const estadopedido_schema_1 = require("../../schemas/Compras/estadopedido.schema");
const router = (0, express_1.Router)();
router.get('/estadopedido/search', (0, get_middleware_1.getFilterTabla)('estadopedido'));
router.get('/estadopedido/', (0, get_middleware_1.getAllTabla)('estadopedido'));
router.post('/estadopedido', (0, schemaValidator_middleware_1.schemaValidation)(estadopedido_schema_1.postestPedidoSchema), (0, get_middleware_1.InsertRow)('estadopedido'));
router.put('/estadopedido/:idEstadoPedido', (0, schemaValidator_middleware_1.schemaValidation)(estadopedido_schema_1.updateestPedidoSchema), (0, get_middleware_1.UpdateRow)('estadopedido'));
router.delete('/estadopedido/:idEstadoPedido', (0, schemaValidator_middleware_1.schemaValidation)(estadopedido_schema_1.deleteestPedidoSchema), (0, get_middleware_1.deleteRow)('estadopedido'));
exports.default = router;
//# sourceMappingURL=estadoped.routes.js.map