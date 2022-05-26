import { Router } from "express";
import { createBoletas, updateBoletas, deleteBoletas } from "../../controllers/Ventas/boletas.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { getAllTabla, InsertRow , getFilterTabla} from "../../middlewares/get.middleware";
import { postBoletaSchema, updateBoletaSchema, deleteBoletaSchema } from "../../schemas/Ventas/boletas.schema";

const router = Router();

router.get('/boletas', getAllTabla('boletas'));
router.post('/boletas', schemaValidation(postBoletaSchema) , InsertRow('boletas'));
router.put('/boletas/:id', schemaValidation(updateBoletaSchema) , updateBoletas );
router.delete('/boletas/:id', schemaValidation(deleteBoletaSchema) , deleteBoletas );

export default router;