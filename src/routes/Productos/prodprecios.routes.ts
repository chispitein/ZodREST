import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { InsertRow, getAllTabla, getFilterTabla, deleteRow, UpdateRow, getInnerTablas } from "../../middlewares/get.middleware";
import { postHistorySchema, updateHistorySchema, deleteHistorySchema } from "../../schemas/Productos/history.schema";

const router = Router();

router.get('/prodprecios/search', getFilterTabla('prodprecios'))
router.get('/prodprecios/', getInnerTablas('productos.idProdCodigo, productos.NombreProd, productos.Cantidad, tipoproducto.TipoProducto,historial.PrecioCompra ,historial.PrecioVenta, historial.PorGanancia, unidadmedidas.Unidad', 'productos inner join historial on historial.idProdCodigo = productos.idProdCodigo inner JOIN tipoproducto on productos.idTipoProducto = tipoproducto.idTipoProducto INNER JOIN unidadmedidas on unidadmedidas.idUnidadMedida = productos.idUnidadMedida;'))
router.post('/prodprecios', schemaValidation(postHistorySchema) , InsertRow('prodprecios') );
router.put('/prodprecios/:idprodprecios', schemaValidation(updateHistorySchema) , UpdateRow('prodprecios') );
router.delete('/prodprecios/:idprodprecios', schemaValidation(deleteHistorySchema) , deleteRow('prodprecios') );



export default router;