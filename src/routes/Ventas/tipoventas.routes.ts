import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import { postTipoVentaSchema, updateTipoVentaSchema, deleteTipoVentarSchema } from "../../schemas/Ventas/tipoventas.schema";

const router = Router();

router.get('/tipoventas/search', getFilterTabla('tipoventas'))
router.get('/tipoventas/', getAllTabla('tipoventas'))
router.post('/tipoventas', schemaValidation(postTipoVentaSchema) , InsertRow('tipoventas') );
router.put('/tipoventas/:idTipoVenta', schemaValidation(updateTipoVentaSchema) , UpdateRow('tipoventas') );
router.delete('/tipoventas/:idTipoVenta', schemaValidation(deleteTipoVentarSchema) , deleteRow('tipoventas') );

export default router;