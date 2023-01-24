import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import { postEstadoUserSchema, updateEstadoUserSchema, deleteEstadoUserSchema } from "../../schemas/Register/estadouser.schema";

const router = Router();

router.get('/estadouser/search', getFilterTabla('estadouser'))
router.get('/estadouser/', getAllTabla('estadouser'))
router.post('/estadouser', schemaValidation(postEstadoUserSchema) , InsertRow('estadouser') );
router.put('/estadouser/:idEstadoUser', schemaValidation(updateEstadoUserSchema) , UpdateRow('estadouser') );
router.delete('/estadouser/:idEstadoUser', schemaValidation(deleteEstadoUserSchema) , deleteRow('estadouser') );

export default router;