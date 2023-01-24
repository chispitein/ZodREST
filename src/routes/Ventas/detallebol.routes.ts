import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import { postDetalleBolSchema, updateDetalleBolSchema, deleteDetalleBolSchema } from "../../schemas/Ventas/detallebol.schema";

const router = Router();

router.get('/detalleboletas/search', getFilterTabla('detalleboletas'))
router.get('/detalleboletas/', getAllTabla('detalleboletas'))
router.post('/detalleboletas', schemaValidation(postDetalleBolSchema) , InsertRow('detalleboletas') );
router.put('/detalleboletas/:idDetalleBoleta', schemaValidation(updateDetalleBolSchema) , UpdateRow('detalleboletas') );
router.delete('/detalleboletas/:idDetalleBoleta', schemaValidation(deleteDetalleBolSchema) , deleteRow('detalleboletas') );

export default router;