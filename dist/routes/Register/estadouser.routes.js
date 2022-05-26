"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadouser_controller_1 = require("../../controllers/register/estadouser.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const estadouser_schema_1 = require("../../schemas/Register/estadouser.schema");
const router = (0, express_1.Router)();
router.post('/estadouser', (0, schemaValidator_middleware_1.schemaValidation)(estadouser_schema_1.regEstadoUserSchema), estadouser_controller_1.createEstadoUser);
router.put('/estadouser/:id', (0, schemaValidator_middleware_1.schemaValidation)(estadouser_schema_1.updateEstadoUserSchema), estadouser_controller_1.updateEstadoUser);
router.delete('/estadouser/:id', (0, schemaValidator_middleware_1.schemaValidation)(estadouser_schema_1.deleteEstadoUserSchema), estadouser_controller_1.deleteEstadoUser);
exports.default = router;
//# sourceMappingURL=estadouser.routes.js.map