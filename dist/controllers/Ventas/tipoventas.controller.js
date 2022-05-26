"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTipoVenta = exports.updateTipoVenta = exports.createTipoVenta = void 0;
const createTipoVenta = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando TipoVenta');
};
exports.createTipoVenta = createTipoVenta;
const updateTipoVenta = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando TipoVenta');
};
exports.updateTipoVenta = updateTipoVenta;
const deleteTipoVenta = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('det TipoVenta');
};
exports.deleteTipoVenta = deleteTipoVenta;
//# sourceMappingURL=tipoventas.controller.js.map