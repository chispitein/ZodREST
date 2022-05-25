import { Router } from "express";
import { createDetBoletas, updateDetBoletas, deleteDetBoletas } from "../../controllers/Ventas/detallebol.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postDetalleBolSchema, updateDetalleBolSchema, deleteDetalleBolSchema } from "../../schemas/Ventas/detallebol.schema";

const router = Router();

router.post('/detallebol', schemaValidation(postDetalleBolSchema) , createDetBoletas );
router.put('/detallebol/:id', schemaValidation(updateDetalleBolSchema) , updateDetBoletas );
router.delete('/detallebol/:id', schemaValidation(deleteDetalleBolSchema) , deleteDetBoletas );

export default router;