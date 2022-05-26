"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadoped_controller_1 = require("../../controllers/Compras/estadoped.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const estadopedido_schema_1 = require("../../schemas/Compras/estadopedido.schema");
const router = (0, express_1.Router)();
router.post('/estpedidos', (0, schemaValidator_middleware_1.schemaValidation)(estadopedido_schema_1.postestPedidoSchema), estadoped_controller_1.createEstPedidos);
router.put('/estpedidos/:id', (0, schemaValidator_middleware_1.schemaValidation)(estadopedido_schema_1.updateestPedidoSchema), estadoped_controller_1.updateEstPedidos);
router.delete('/estpedidos/:id', (0, schemaValidator_middleware_1.schemaValidation)(estadopedido_schema_1.deleteestPedidoSchema), estadoped_controller_1.deleteEstPedidos);
exports.default = router;
//# sourceMappingURL=estadoped.routes.js.map