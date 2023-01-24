import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import {postWishListSchema, updateWishListSSchema, deleteWishListSSchema}  from "../../schemas/Compras/wishlist.schema";

const router = Router();

router.get('/wishlist/search', getFilterTabla('wishlist'))
router.get('/wishlist/', getAllTabla('wishlist'))
router.post('/wishlist', schemaValidation(postWishListSchema) , InsertRow('wishlist') );
router.put('/wishlist/:idWishList', schemaValidation(updateWishListSSchema) , UpdateRow('wishlist') );
router.delete('/wishlist/:idWishList', schemaValidation(deleteWishListSSchema) , deleteRow('wishlist') );

export default router;