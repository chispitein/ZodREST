import { Router } from "express";
import { createUnidadMedida, updateUnidadMedida, deleteUnidadMedida } from "../../controllers/Productos/unidadmedida.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { UnidadMedidaSchema, updateUnidadMedidaSchema, deleteUnidadMedidaSchema } from "../../schemas/Productos/unmedida.schema";

const router = Router();

router.post('/umedida', schemaValidation(UnidadMedidaSchema) ,createUnidadMedida );
router.put('/umedida/:id', schemaValidation(updateUnidadMedidaSchema) , updateUnidadMedida );
router.delete('/umedida/:id', schemaValidation(deleteUnidadMedidaSchema) , deleteUnidadMedida );

export default router;