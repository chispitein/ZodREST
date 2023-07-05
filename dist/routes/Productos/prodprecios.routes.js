"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_middleware_1 = require("../../middlewares/get.middleware");
const router = (0, express_1.Router)();
router.get('/prodprecios/', (0, get_middleware_1.getInnerTablas)('productos.idProdCodigo, productos.NombreProd ,productos.NombreProd, productos.Cantidad, tipoproducto.TipoProducto,historial.PrecioCompra ,historial.PrecioVenta, historial.PorGanancia, unidadmedidas.Unidad', 'productos inner join historial on historial.idProdCodigo = productos.idProdCodigo inner JOIN tipoproducto on productos.idTipoProducto = tipoproducto.idTipoProducto INNER JOIN unidadmedidas on unidadmedidas.idUnidadMedida = productos.idUnidadMedida;'));
exports.default = router;
//# sourceMappingURL=prodprecios.routes.js.map