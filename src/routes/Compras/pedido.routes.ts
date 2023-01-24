import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import {postPedidoSchema, updatePedidoSchema, deletePedidoSchema}  from "../../schemas/Compras/pedidos.schema";

const router = Router();

router.get('/pedidos/search', getFilterTabla('pedidos'))
router.get('/pedidos/', getAllTabla('pedidos'))
router.post('/pedidos', schemaValidation(postPedidoSchema) , InsertRow('pedidos') );
router.put('/pedidos/:idPedido', schemaValidation(updatePedidoSchema) , UpdateRow('pedidos') );
router.delete('/pedidos/:idPedido', schemaValidation(deletePedidoSchema) , deleteRow('pedidos') );

export default router;