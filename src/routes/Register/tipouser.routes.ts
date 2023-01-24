import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import { postTipoUserSchema, updateTipoUserSchema, deleteTipoUserSchema } from "../../schemas/Register/tipouser.schema";

const router = Router();

router.get('/tipouser/search', getFilterTabla('tipouser'))
router.get('/tipouser/', getAllTabla('tipouser'))
router.post('/tipouser', schemaValidation(postTipoUserSchema) , InsertRow('tipouser') );
router.put('/tipouser/:idTipoUser', schemaValidation(updateTipoUserSchema) , UpdateRow('tipouser') );
router.delete('/tipouser/:idTipoUser', schemaValidation(deleteTipoUserSchema) , deleteRow('tipouser') );

export default router;