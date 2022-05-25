import { Router } from "express";
import { createTipoVenta, updateTipoVenta, deleteTipoVenta } from "../../controllers/Ventas/tipoventas.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { postTipoVentaSchema, updateTipoVentaSchema, deleteTipoVentarSchema } from "../../schemas/Ventas/tipoventas.schema";

const router = Router();

router.post('/tipoventa', schemaValidation(postTipoVentaSchema) , createTipoVenta );
router.put('/tipoventa/:id', schemaValidation(updateTipoVentaSchema) , updateTipoVenta );
router.delete('/tipoventa/:id', schemaValidation(deleteTipoVentarSchema) , deleteTipoVenta );

export default router;