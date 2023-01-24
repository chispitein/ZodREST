import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import { postUserSchema, updateUserSchema, deleteUserSchema } from "../../schemas/Register/register.schema";

const router = Router();

router.get('/usuarios/search', getFilterTabla('usuarios'))
router.get('/usuarios/', getAllTabla('usuarios'))
router.post('/usuarios', schemaValidation(postUserSchema) , InsertRow('usuarios') );
router.put('/usuarios/:idUser', schemaValidation(updateUserSchema) , UpdateRow('usuarios') );
router.delete('/usuarios/:idUser', schemaValidation(deleteUserSchema) , deleteRow('usuarios') );

export default router;