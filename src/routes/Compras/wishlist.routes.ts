import { Router } from "express";
import { createWishList, updateWishList, deleteWishList } from "../../controllers/Compras/wishlist.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postWishListSchema, updateWishListSSchema, deleteWishListSSchema } from "../../schemas/Compras/wishlist.schema";

const router = Router();

router.post('/wishlist', schemaValidation(postWishListSchema) , createWishList );
router.put('/wishlist/:id', schemaValidation(updateWishListSSchema) , updateWishList );
router.delete('/wishlist/:id', schemaValidation(deleteWishListSSchema) , deleteWishList );

export default router;