import { Router } from "express";
import { createEstadoUser, updateEstadoUser, deleteEstadoUser } from "../controllers/reg.estadouser.controller";
import { schemaValidation } from "../middlewares/schemaValidator.middleware";
import { regEstadoUserSchema, updateEstadoUserSchema, deleteEstadoUserSchema } from "../schemas/reg.estadouser.schema";

const router = Router();

router.post('/estadouser', schemaValidation(regEstadoUserSchema) ,createEstadoUser );
router.put('/estadouser/:id', schemaValidation(updateEstadoUserSchema) ,updateEstadoUser );
router.delete('/estadouser/:id', schemaValidation(deleteEstadoUserSchema) ,deleteEstadoUser );

export default router;