import { Router } from "express";
import { createTipoProduct, updateTipoProduct, deleteTipoProduct } from "../../controllers/Productos/tipoprod.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { regTipoProductSchema, updateTipoProductSchema, deleteTipoProductSchema } from "../../schemas/Productos/tipoprod.schema";

const router = Router();

router.post('/tipoproduct', schemaValidation(regTipoProductSchema) ,createTipoProduct );
router.put('/tipoproduct/:id', schemaValidation(updateTipoProductSchema) ,updateTipoProduct );
router.delete('/tipoproduct/:id', schemaValidation(deleteTipoProductSchema) ,deleteTipoProduct );

export default router;