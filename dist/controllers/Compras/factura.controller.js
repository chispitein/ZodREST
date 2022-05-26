"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFactura = exports.updateFactura = exports.createFactura = void 0;
const createFactura = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando Factura');
};
exports.createFactura = createFactura;
const updateFactura = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando Factura');
};
exports.updateFactura = updateFactura;
const deleteFactura = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Factura borrado');
};
exports.deleteFactura = deleteFactura;
//# sourceMappingURL=factura.controller.js.map