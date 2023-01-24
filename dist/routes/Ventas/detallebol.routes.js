"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const detallebol_schema_1 = require("../../schemas/Ventas/detallebol.schema");
const router = (0, express_1.Router)();
router.get('/detalleboletas/search', (0, get_middleware_1.getFilterTabla)('detalleboletas'));
router.get('/detalleboletas/', (0, get_middleware_1.getAllTabla)('detalleboletas'));
router.post('/detalleboletas', (0, schemaValidator_middleware_1.schemaValidation)(detallebol_schema_1.postDetalleBolSchema), (0, get_middleware_1.InsertRow)('detalleboletas'));
router.put('/detalleboletas/:idDetalleBoleta', (0, schemaValidator_middleware_1.schemaValidation)(detallebol_schema_1.updateDetalleBolSchema), (0, get_middleware_1.UpdateRow)('detalleboletas'));
router.delete('/detalleboletas/:idDetalleBoleta', (0, schemaValidator_middleware_1.schemaValidation)(detallebol_schema_1.deleteDetalleBolSchema), (0, get_middleware_1.deleteRow)('detalleboletas'));
exports.default = router;
//# sourceMappingURL=detallebol.routes.js.map