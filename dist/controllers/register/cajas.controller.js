"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCaja = exports.updateCaja = exports.createCaja = void 0;
const createCaja = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando Caja');
};
exports.createCaja = createCaja;
const updateCaja = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando Caja');
};
exports.updateCaja = updateCaja;
const deleteCaja = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Caja borrada');
};
exports.deleteCaja = deleteCaja;
//# sourceMappingURL=cajas.controller.js.map