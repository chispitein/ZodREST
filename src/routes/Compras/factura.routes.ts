import { Router } from "express";
import { createFactura, updateFactura, deleteFactura } from "../../controllers/Compras/factura.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postFacturaSchema, updateFacturaSchema, deleteFacturaSchema } from "../../schemas/Compras/factura.schema";

const router = Router();

router.post('/facturas', schemaValidation(postFacturaSchema) , createFactura );
router.put('/facturas/:id', schemaValidation(updateFacturaSchema) , updateFactura );
router.delete('/facturas/:id', schemaValidation(deleteFacturaSchema) , deleteFactura );

export default router;