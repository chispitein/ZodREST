import { Router } from "express";
import { createproduct, deleteProduct, updateproduct } from "../../controllers/Productos/product.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { deleteProductSchema, productSchema, updateProductSchema } from "../../schemas/Productos/product.schema";

const router = Router();

router.post('/products', schemaValidation(productSchema) ,createproduct );
router.put('/products/:id', schemaValidation(updateProductSchema) ,updateproduct );
router.put('/products/:id', schemaValidation(deleteProductSchema) ,deleteProduct);

export default router;