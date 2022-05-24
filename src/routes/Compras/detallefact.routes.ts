import { Router } from "express";
import { createDetFactura, updateDetFactura, deleteDetFactura } from "../../controllers/Compras/detallefac.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postdetFacturaSchema, updatedetFacturaSchema, deletedetFacturaSchema } from "../../schemas/Compras/detallefac.schema";

const router = Router();

router.post('/detfacturas', schemaValidation(postdetFacturaSchema) , createDetFactura );
router.put('/detfacturas/:idFactura', schemaValidation(updatedetFacturaSchema) , updateDetFactura );
router.delete('/detfacturas/:id', schemaValidation(deletedetFacturaSchema) , deleteDetFactura );

export default router;