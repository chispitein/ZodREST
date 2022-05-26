import { Router } from "express";
import { createFiadores, updateFiadores, deleteFiadores, getbyidFiador } from "../../controllers/Fiados/fiadores.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postFiadoresSchema, updateFiadoresSchema, deleteFiadoresSchema } from "../../schemas/Fiados/fiadores.schema";

const router = Router();

router.get('/fiadores/:idFiador', getbyidFiador)
router.post('/fiadores', schemaValidation(postFiadoresSchema) , createFiadores );
router.put('/fiadores/:id', schemaValidation(updateFiadoresSchema) , updateFiadores );
router.delete('/fiadores/:id', schemaValidation(deleteFiadoresSchema) , deleteFiadores );

export default router;