"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_controller_1 = require("../../controllers/register/register.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const register_schema_1 = require("../../schemas/Register/register.schema");
const router = (0, express_1.Router)();
router.post('/register', (0, schemaValidator_middleware_1.schemaValidation)(register_schema_1.registerUserSchema), register_controller_1.createUser);
router.put('/register/:id', (0, schemaValidator_middleware_1.schemaValidation)(register_schema_1.updateUserSchema), register_controller_1.updateUser);
router.delete('/register/:id', (0, schemaValidator_middleware_1.schemaValidation)(register_schema_1.deleteUserSchema), register_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=register.routes.js.map