"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wishlist_controller_1 = require("../../controllers/Compras/wishlist.controller");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const wishlist_schema_1 = require("../../schemas/Compras/wishlist.schema");
const router = (0, express_1.Router)();
router.post('/wishlist', (0, schemaValidator_middleware_1.schemaValidation)(wishlist_schema_1.postWishListSchema), wishlist_controller_1.createWishList);
router.put('/wishlist/:id', (0, schemaValidator_middleware_1.schemaValidation)(wishlist_schema_1.updateWishListSSchema), wishlist_controller_1.updateWishList);
router.delete('/wishlist/:id', (0, schemaValidator_middleware_1.schemaValidation)(wishlist_schema_1.deleteWishListSSchema), wishlist_controller_1.deleteWishList);
exports.default = router;
//# sourceMappingURL=wishlist.routes.js.map