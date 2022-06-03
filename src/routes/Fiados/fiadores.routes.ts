import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import { postFiadoresSchema, updateFiadoresSchema, deleteFiadoresSchema } from "../../schemas/Fiados/fiadores.schema";

const router = Router();

router.get('/fiadores/search', getFilterTabla('fiadores'))
router.get('/fiadores/', getAllTabla('fiadores'))
router.post('/fiadores', schemaValidation(postFiadoresSchema) , InsertRow('fiadores') );
router.put('/fiadores/:idFiador', schemaValidation(updateFiadoresSchema) , UpdateRow('fiadores') );
router.delete('/fiadores/:idFiador', schemaValidation(deleteFiadoresSchema) , deleteRow('fiadores') );

export default router;