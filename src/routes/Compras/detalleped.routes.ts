import { Router } from "express";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postdetPedidoSchema, updatedetPedidoSchema, deletedetPedidoSchema } from "../../schemas/Compras/detalleped.schema";

const router = Router();

router.get('/detallepedidos/search', getFilterTabla('detallepedidos'))
router.get('/detallepedidos/', getAllTabla('detallepedidos'))
router.post('/detallepedidos', schemaValidation(postdetPedidoSchema) , InsertRow('detallepedidos') );
router.put('/detallepedidos/:idDetallePedidos', schemaValidation(updatedetPedidoSchema) , UpdateRow('detallepedidos') );
router.delete('/detallepedidos/:idDetallePedidos', schemaValidation(deletedetPedidoSchema) , deleteRow('detallepedidos') );

export default router;