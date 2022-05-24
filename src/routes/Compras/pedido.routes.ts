import { Router } from "express";
import { createPedido, updatePedido, deletePedido } from "../../controllers/Compras/pedido.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postPedidoSchema, updatePedidoSchema, deletePedidoSchema } from "../../schemas/Compras/pedidos.schema";

const router = Router();

router.post('/pedidos', schemaValidation(postPedidoSchema) , createPedido );
router.put('/pedidos/:id', schemaValidation(updatePedidoSchema) , updatePedido );
router.delete('/pedidos/:id', schemaValidation(deletePedidoSchema) , deletePedido );

export default router;