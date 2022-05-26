"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const history_controller_1 = require("../../controllers/Productos/history.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const history_schema_1 = require("../../schemas/Productos/history.schema");
const router = (0, express_1.Router)();
router.post('/history', (0, schemaValidator_middleware_1.schemaValidation)(history_schema_1.registerHistorySchema), history_controller_1.createHistory);
router.put('/history/:id', (0, schemaValidator_middleware_1.schemaValidation)(history_schema_1.updateHistorySchema), history_controller_1.updateHistory);
router.delete('/history/:id', (0, schemaValidator_middleware_1.schemaValidation)(history_schema_1.deleteHistorySchema), history_controller_1.deleteHistory);
exports.default = router;
//# sourceMappingURL=history.routes.js.map