import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import {postestPedidoSchema, updateestPedidoSchema, deleteestPedidoSchema}  from "../../schemas/Compras/estadopedido.schema";

const router = Router();

router.get('/estadopedido/search', getFilterTabla('estadopedido'))
router.get('/estadopedido/', getAllTabla('estadopedido'))
router.post('/estadopedido', schemaValidation(postestPedidoSchema) , InsertRow('estadopedido') );
router.put('/estadopedido/:idEstadoPedido', schemaValidation(updateestPedidoSchema) , UpdateRow('estadopedido') );
router.delete('/estadopedido/:idEstadoPedido', schemaValidation(deleteestPedidoSchema) , deleteRow('estadopedido') );

export default router;