import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import { postTipoProductSchema, updateTipoProductSchema, deleteTipoProductSchema } from "../../schemas/Productos/tipoprod.schema";

const router = Router();

router.get('/tipoproducto/search', getFilterTabla('tipoproducto'))
router.get('/tipoproducto/', getAllTabla('tipoproducto'))
router.post('/tipoproducto', schemaValidation(postTipoProductSchema) , InsertRow('tipoproducto') );
router.put('/tipoproducto/:idTipoProducto', schemaValidation(updateTipoProductSchema) , UpdateRow('tipoproducto') );
router.delete('/tipoproducto/:idTipoProducto', schemaValidation(deleteTipoProductSchema) , deleteRow('tipoproducto') );

export default router;