import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import { postCajaSchema, updateCajaSchema, deleteCajaSchema } from "../../schemas/Register/cajas.schema";

const router = Router();

router.get('/cajas/search', getFilterTabla('cajas'))
router.get('/cajas/', getAllTabla('cajas'))
router.post('/cajas', schemaValidation(postCajaSchema) , InsertRow('cajas') );
router.put('/cajas/:idCaja', schemaValidation(updateCajaSchema) , UpdateRow('cajas') );
router.delete('/cajas/:idCaja', schemaValidation(deleteCajaSchema) , deleteRow('cajas') );

export default router;