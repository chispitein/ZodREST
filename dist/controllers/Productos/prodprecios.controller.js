"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteprodprecios = exports.updateprodprecios = exports.createprodprecios = void 0;
const createprodprecios = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando prodprecios');
};
exports.createprodprecios = createprodprecios;
const updateprodprecios = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando prodprecios');
};
exports.updateprodprecios = updateprodprecios;
const deleteprodprecios = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('prodprecios borrada');
};
exports.deleteprodprecios = deleteprodprecios;
//# sourceMappingURL=prodprecios.controller.js.map