import { Router } from "express";
import { createFiadores, updateFiadores, deleteFiadores } from "../../controllers/Fiados/fiadores.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postFiadoresSchema, updateFiadoresSchema, deleteFiadoresSchema } from "../../schemas/Fiados/fiadores.schema";

const router = Router();

router.post('/fiadores', schemaValidation(postFiadoresSchema) , createFiadores );
router.put('/fiadores/:id', schemaValidation(updateFiadoresSchema) , updateFiadores );
router.delete('/fiadores/:id', schemaValidation(deleteFiadoresSchema) , deleteFiadores );

export default router;