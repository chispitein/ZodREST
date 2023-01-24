"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schemaValidator_middleware_1 = require("../../middlewares/schemaValidator.middleware");
const get_middleware_1 = require("../../middlewares/get.middleware");
const wishlist_schema_1 = require("../../schemas/Compras/wishlist.schema");
const router = (0, express_1.Router)();
router.get('/wishlist/search', (0, get_middleware_1.getFilterTabla)('wishlist'));
router.get('/wishlist/', (0, get_middleware_1.getAllTabla)('wishlist'));
router.post('/wishlist', (0, schemaValidator_middleware_1.schemaValidation)(wishlist_schema_1.postWishListSchema), (0, get_middleware_1.InsertRow)('wishlist'));
router.put('/wishlist/:idWishList', (0, schemaValidator_middleware_1.schemaValidation)(wishlist_schema_1.updateWishListSSchema), (0, get_middleware_1.UpdateRow)('wishlist'));
router.delete('/wishlist/:idWishList', (0, schemaValidator_middleware_1.schemaValidation)(wishlist_schema_1.deleteWishListSSchema), (0, get_middleware_1.deleteRow)('wishlist'));
exports.default = router;
//# sourceMappingURL=wishlist.routes.js.map