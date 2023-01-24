import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import { postUnidadMedidaSchema, updateUnidadMedidaSchema, deleteUnidadMedidaSchema } from "../../schemas/Productos/unmedida.schema";

const router = Router();

router.get('/unidadmedidas/search', getFilterTabla('unidadmedidas'))
router.get('/unidadmedidas/', getAllTabla('unidadmedidas'))
router.post('/unidadmedidas', schemaValidation(postUnidadMedidaSchema) , InsertRow('unidadmedidas') );
router.put('/unidadmedidas/:idUnidadMedida', schemaValidation(updateUnidadMedidaSchema) , UpdateRow('unidadmedidas') );
router.delete('/unidadmedidas/:idUnidadMedida', schemaValidation(deleteUnidadMedidaSchema) , deleteRow('unidadmedidas') );

export default router;