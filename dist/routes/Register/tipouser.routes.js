"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipouser_controller_1 = require("../../controllers/register/tipouser.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const tipouser_schema_1 = require("../../schemas/Register/tipouser.schema");
const router = (0, express_1.Router)();
router.post('/tipouser', (0, schemaValidator_middleware_1.schemaValidation)(tipouser_schema_1.regTipoUserSchema), tipouser_controller_1.createTipoUser);
router.put('/tipouser/:id', (0, schemaValidator_middleware_1.schemaValidation)(tipouser_schema_1.updateTipoUserSchema), tipouser_controller_1.updateTipoUser);
router.delete('/tipouser/:id', (0, schemaValidator_middleware_1.schemaValidation)(tipouser_schema_1.deleteTipoUserSchema), tipouser_controller_1.deleteTipoUser);
exports.default = router;
//# sourceMappingURL=tipouser.routes.js.map