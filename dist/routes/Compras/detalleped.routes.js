"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_middleware_1 = require("../../middlewares/get.middleware");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const detalleped_schema_1 = require("../../schemas/Compras/detalleped.schema");
const router = (0, express_1.Router)();
router.get('/detallepedidos/search', (0, get_middleware_1.getFilterTabla)('detallepedidos'));
router.get('/detallepedidos/', (0, get_middleware_1.getAllTabla)('detallepedidos'));
router.post('/detallepedidos', (0, schemaValidator_middleware_1.schemaValidation)(detalleped_schema_1.postdetPedidoSchema), (0, get_middleware_1.InsertRow)('detallepedidos'));
router.put('/detallepedidos/:idDetallePedidos', (0, schemaValidator_middleware_1.schemaValidation)(detalleped_schema_1.updatedetPedidoSchema), (0, get_middleware_1.UpdateRow)('detallepedidos'));
router.delete('/detallepedidos/:idDetallePedidos', (0, schemaValidator_middleware_1.schemaValidation)(detalleped_schema_1.deletedetPedidoSchema), (0, get_middleware_1.deleteRow)('detallepedidos'));
exports.default = router;
//# sourceMappingURL=detalleped.routes.js.map