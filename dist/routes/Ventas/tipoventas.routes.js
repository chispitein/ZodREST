"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const tipoventas_schema_1 = require("../../schemas/Ventas/tipoventas.schema");
const router = (0, express_1.Router)();
router.get('/tipoventas/search', (0, get_middleware_1.getFilterTabla)('tipoventas'));
router.get('/tipoventas/', (0, get_middleware_1.getAllTabla)('tipoventas'));
router.post('/tipoventas', (0, schemaValidator_middleware_1.schemaValidation)(tipoventas_schema_1.postTipoVentaSchema), (0, get_middleware_1.InsertRow)('tipoventas'));
router.put('/tipoventas/:idTipoVenta', (0, schemaValidator_middleware_1.schemaValidation)(tipoventas_schema_1.updateTipoVentaSchema), (0, get_middleware_1.UpdateRow)('tipoventas'));
router.delete('/tipoventas/:idTipoVenta', (0, schemaValidator_middleware_1.schemaValidation)(tipoventas_schema_1.deleteTipoVentarSchema), (0, get_middleware_1.deleteRow)('tipoventas'));
exports.default = router;
//# sourceMappingURL=tipoventas.routes.js.map