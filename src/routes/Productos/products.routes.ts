import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow } from "../../middlewares/get.middleware";
import { postProductSchema, updateProductSchema, deleteProductSchema } from "../../schemas/Productos/product.schema";

const router = Router();

router.get('/productos/search', getFilterTabla('productos'))
router.get('/productos/', getAllTabla('productos'))
router.post('/productos', schemaValidation(postProductSchema) , InsertRow('productos') );
router.put('/productos/:idProdCodigo', schemaValidation(updateProductSchema) , UpdateRow('productos') );
router.delete('/productos/:idProdCodigo', schemaValidation(deleteProductSchema) , deleteRow('productos') );

export default router;