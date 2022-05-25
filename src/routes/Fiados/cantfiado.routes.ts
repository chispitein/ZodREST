import { Router } from "express";
import { createCantFiado, updateCantFiado, deleteCantFiado } from "../../controllers/Fiados/cantfiado.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postCantidadFiadoSchema, updateCantidadFiadoSchema, deleteCantidadFiadoSchema } from "../../schemas/Fiados/cantfiado.schema";

const router = Router();

router.post('/cantfiado', schemaValidation(postCantidadFiadoSchema) , createCantFiado );
router.put('/cantfiado/:id', schemaValidation(updateCantidadFiadoSchema) , updateCantFiado );
router.delete('/cantfiado/:id', schemaValidation(deleteCantidadFiadoSchema) , deleteCantFiado );

export default router;