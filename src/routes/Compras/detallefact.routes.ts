import { Router } from "express";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postdetFacturaSchema, updatedetFacturaSchema, deletedetFacturaSchema } from "../../schemas/Compras/detallefac.schema";

const router = Router();

router.get('/detallefacturas/search', getFilterTabla('detallefacturas'))
router.get('/detallefacturas/', getAllTabla('detallefacturas'))
router.post('/detallefacturas', schemaValidation(postdetFacturaSchema) , InsertRow('detallefacturas') );
router.put('/detallefacturas/:idDetalleCompra', schemaValidation(updatedetFacturaSchema) , UpdateRow('detallefacturas') );
router.delete('/detallefacturas/:idDetalleCompra', schemaValidation(deletedetFacturaSchema) , deleteRow('detallefacturas') );


export default router;