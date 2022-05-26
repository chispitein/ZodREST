"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../../controllers/auth/auth.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const auth_schema_1 = require("../../schemas/Auth/auth.schema");
const router = (0, express_1.Router)();
router.post('/login', (0, schemaValidator_middleware_1.schemaValidation)(auth_schema_1.loginSchema), auth_controller_1.login);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map