import { Router } from "express";
import { createBoletas, updateBoletas, deleteBoletas } from "../../controllers/Ventas/boletas.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postBoletaSchema, updateBoletaSchema, deleteBoletaSchema } from "../../schemas/Ventas/boletas.schema";

const router = Router();

router.post('/boletas', schemaValidation(postBoletaSchema) , createBoletas );
router.put('/boletas/:id', schemaValidation(updateBoletaSchema) , updateBoletas );
router.delete('/boletas/:id', schemaValidation(deleteBoletaSchema) , deleteBoletas );

export default router;