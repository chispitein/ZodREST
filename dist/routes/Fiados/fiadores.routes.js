"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fiadores_controller_1 = require("../../controllers/Fiados/fiadores.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const fiadores_schema_1 = require("../../schemas/Fiados/fiadores.schema");
const router = (0, express_1.Router)();
router.post('/fiadores', (0, schemaValidator_middleware_1.schemaValidation)(fiadores_schema_1.postFiadoresSchema), fiadores_controller_1.createFiadores);
router.put('/fiadores/:id', (0, schemaValidator_middleware_1.schemaValidation)(fiadores_schema_1.updateFiadoresSchema), fiadores_controller_1.updateFiadores);
router.delete('/fiadores/:id', (0, schemaValidator_middleware_1.schemaValidation)(fiadores_schema_1.deleteFiadoresSchema), fiadores_controller_1.deleteFiadores);
exports.default = router;
//# sourceMappingURL=fiadores.routes.js.map