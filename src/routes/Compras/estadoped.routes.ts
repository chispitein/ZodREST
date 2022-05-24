import { Router } from "express";
import { createEstPedidos, updateEstPedidos, deleteEstPedidos } from "../../controllers/Compras/estadoped.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postestPedidoSchema, updateestPedidoSchema, deleteestPedidoSchema } from "../../schemas/Compras/estadopedido.schema";

const router = Router();

router.post('/estpedidos', schemaValidation(postestPedidoSchema) , createEstPedidos );
router.put('/estpedidos/:id', schemaValidation(updateestPedidoSchema) , updateEstPedidos );
router.delete('/estpedidos/:id', schemaValidation(deleteestPedidoSchema) , deleteEstPedidos );

export default router;