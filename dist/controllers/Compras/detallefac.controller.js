"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDetFactura = exports.updateDetFactura = exports.createDetFactura = void 0;
const createDetFactura = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando det Factura');
};
exports.createDetFactura = createDetFactura;
const updateDetFactura = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando det Factura');
};
exports.updateDetFactura = updateDetFactura;
const deleteDetFactura = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('det Factura borrado');
};
exports.deleteDetFactura = deleteDetFactura;
//# sourceMappingURL=detallefac.controller.js.map