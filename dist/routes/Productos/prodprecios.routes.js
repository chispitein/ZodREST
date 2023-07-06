"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_middleware_1 = require("../../middlewares/get.middleware");
const router = (0, express_1.Router)();
router.get("/prodprecios", (0, get_middleware_1.getInnerTablas)());
router.get("/prodprecios/search/:idProdCodigo", (0, get_middleware_1.getoneInnerTables)());
exports.default = router;
//# sourceMappingURL=prodprecios.routes.js.map