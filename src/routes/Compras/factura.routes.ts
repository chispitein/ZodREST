import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import {postFacturaSchema, updateFacturaSchema, deleteFacturaSchema}  from "../../schemas/Compras/factura.schema";

const router = Router();

router.get('/facturas/search', getFilterTabla('facturas'))
router.get('/facturas/', getAllTabla('facturas'))
router.post('/facturas', schemaValidation(postFacturaSchema) , InsertRow('facturas') );
router.put('/facturas/:idFactura', schemaValidation(updateFacturaSchema) , UpdateRow('facturas') );
router.delete('/facturas/:idFactura', schemaValidation(deleteFacturaSchema) , deleteRow('facturas') );

export default router;

