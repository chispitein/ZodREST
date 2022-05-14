import { Router } from "express";
import { createProvedor, updateProvedor, deleteProvedor } from "../../controllers/Compras/provedor.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postProvedorSchema, updateProvedorSchema, deleteProvedorSchema } from "../../schemas/Compras/provedores.schema";

const router = Router();

router.post('/provedores', schemaValidation(postProvedorSchema) , createProvedor );
router.put('/provedores/:id', schemaValidation(updateProvedorSchema) , updateProvedor );
router.delete('/provedores/:id', schemaValidation(deleteProvedorSchema) , deleteProvedor );

export default router;