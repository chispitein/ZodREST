import { Router } from "express";
import { createDetPedidos, updateDetPedidos, deleteDetPedidos } from "../../controllers/Compras/detPedidos.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postdetPedidoSchema, updatedetPedidoSchema, deletedetPedidoSchema } from "../../schemas/Compras/detalleped.schema";

const router = Router();

router.post('/detpedidos', schemaValidation(postdetPedidoSchema) , createDetPedidos );
router.put('/detpedidos/:id', schemaValidation(updatedetPedidoSchema) , updateDetPedidos );
router.delete('/detpedidos/:id', schemaValidation(deletedetPedidoSchema) , deleteDetPedidos );

export default router;