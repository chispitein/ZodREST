import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import {postProvedorSchema, updateProvedorSchema, deleteProvedorSchema}  from "../../schemas/Compras/provedores.schema";

const router = Router();

router.get('/provedores/search', getFilterTabla('provedores'))
router.get('/provedores/', getAllTabla('provedores'))
router.post('/provedores', schemaValidation(postProvedorSchema) , InsertRow('provedores') );
router.put('/provedores/:idProvedor', schemaValidation(updateProvedorSchema) , UpdateRow('provedores') );
router.delete('/provedores/:idProvedor', schemaValidation(deleteProvedorSchema) , deleteRow('provedores') );

export default router;