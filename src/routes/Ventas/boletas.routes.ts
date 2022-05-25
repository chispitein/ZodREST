import { Router } from "express";
import { createBoletas, updateBoletas, deleteBoletas } from "../../controllers/Ventas/boletas.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postFacturaSchema, updateFacturaSchema, deleteFacturaSchema } from "../../schemas/Ventas/boletas.schema";

const router = Router();

router.post('/boletas', schemaValidation(postFacturaSchema) , createBoletas );
router.put('/boletas/:id', schemaValidation(updateFacturaSchema) , updateBoletas );
router.delete('/boletas/:id', schemaValidation(deleteFacturaSchema) , deleteBoletas );

export default router;