"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_middleware_1 = require("../../middlewares/get.middleware");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const detallefac_schema_1 = require("../../schemas/Compras/detallefac.schema");
const router = (0, express_1.Router)();
router.get('/detallefacturas/search', (0, get_middleware_1.getFilterTabla)('detallefacturas'));
router.get('/detallefacturas/', (0, get_middleware_1.getAllTabla)('detallefacturas'));
router.post('/detallefacturas', (0, schemaValidator_middleware_1.schemaValidation)(detallefac_schema_1.postdetFacturaSchema), (0, get_middleware_1.InsertRow)('detallefacturas'));
router.put('/detallefacturas/:idDetalleCompra', (0, schemaValidator_middleware_1.schemaValidation)(detallefac_schema_1.updatedetFacturaSchema), (0, get_middleware_1.UpdateRow)('detallefacturas'));
router.delete('/detallefacturas/:idDetalleCompra', (0, schemaValidator_middleware_1.schemaValidation)(detallefac_schema_1.deletedetFacturaSchema), (0, get_middleware_1.deleteRow)('detallefacturas'));
exports.default = router;
//# sourceMappingURL=detallefact.routes.js.map