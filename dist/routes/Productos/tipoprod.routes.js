"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoprod_controller_1 = require("../../controllers/Productos/tipoprod.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const tipoprod_schema_1 = require("../../schemas/Productos/tipoprod.schema");
const router = (0, express_1.Router)();
router.post('/tipoproduct', (0, schemaValidator_middleware_1.schemaValidation)(tipoprod_schema_1.regTipoProductSchema), tipoprod_controller_1.createTipoProduct);
router.put('/tipoproduct/:id', (0, schemaValidator_middleware_1.schemaValidation)(tipoprod_schema_1.updateTipoProductSchema), tipoprod_controller_1.updateTipoProduct);
router.delete('/tipoproduct/:id', (0, schemaValidator_middleware_1.schemaValidation)(tipoprod_schema_1.deleteTipoProductSchema), tipoprod_controller_1.deleteTipoProduct);
exports.default = router;
//# sourceMappingURL=tipoprod.routes.js.map