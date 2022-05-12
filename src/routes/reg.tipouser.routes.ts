import { Router } from "express";
import { createTipoUser, updateTipoUser, deleteTipoUser } from "../controllers/reg.tipouser.controller";
import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import { regTipoUserSchema, updateTipoUserSchema, deleteTipoUserSchema } from "../schemas/reg.tipouser.schema";

const router = Router();

router.post('/tipouser', schemaValidation(regTipoUserSchema) ,createTipoUser );
router.put('/tipouser/:id', schemaValidation(updateTipoUserSchema) ,updateTipoUser );
router.delete('/tipouser/:id', schemaValidation(deleteTipoUserSchema) ,deleteTipoUser );

export default router;