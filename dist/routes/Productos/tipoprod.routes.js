"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const tipoprod_schema_1 = require("../../schemas/Productos/tipoprod.schema");
const router = (0, express_1.Router)();
router.get('/tipoproducto/search', (0, get_middleware_1.getFilterTabla)('tipoproducto'));
router.get('/tipoproducto/', (0, get_middleware_1.getAllTabla)('tipoproducto'));
router.post('/tipoproducto', (0, schemaValidator_middleware_1.schemaValidation)(tipoprod_schema_1.postTipoProductSchema), (0, get_middleware_1.InsertRow)('tipoproducto'));
router.put('/tipoproducto/:idTipoProducto', (0, schemaValidator_middleware_1.schemaValidation)(tipoprod_schema_1.updateTipoProductSchema), (0, get_middleware_1.UpdateRow)('tipoproducto'));
router.delete('/tipoproducto/:idTipoProducto', (0, schemaValidator_middleware_1.schemaValidation)(tipoprod_schema_1.deleteTipoProductSchema), (0, get_middleware_1.deleteRow)('tipoproducto'));
exports.default = router;
//# sourceMappingURL=tipoprod.routes.js.map