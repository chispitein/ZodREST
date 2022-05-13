import { Router } from "express";
import { createCaja, updateCaja, deleteCaja } from "../controllers/reg.cajas.controller";
import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import { CajaSchema, deleteCajaSchema, updateCajaSchema } from "../schemas/reg.cajas.schema";

const router = Router();

router.post('/cajas/:id', schemaValidation(CajaSchema) , createCaja );
router.put('/cajas/:id', schemaValidation(updateCajaSchema) ,updateCaja );
router.delete('/cajas/:id', schemaValidation(deleteCajaSchema) ,deleteCaja );

export default router;