import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import {postCantidadFiadoSchema, updateCantidadFiadoSchema, deleteCantidadFiadoSchema}  from "../../schemas/Fiados/cantfiado.schema";

const router = Router();

router.get('/cantidadfiado/search', getFilterTabla('cantidadfiado'))
router.get('/cantidadfiado/', getAllTabla('cantidadfiado'))
router.post('/cantidadfiado', schemaValidation(postCantidadFiadoSchema) , InsertRow('cantidadfiado') );
router.put('/cantidadfiado/:idCantidadFiado', schemaValidation(updateCantidadFiadoSchema) , UpdateRow('cantidadfiado') );
router.delete('/cantidadfiado/:idCantidadFiado', schemaValidation(deleteCantidadFiadoSchema) , deleteRow('cantidadfiado') );

export default router;