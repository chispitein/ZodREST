"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDetBoletas = exports.updateDetBoletas = exports.createDetBoletas = void 0;
const createDetBoletas = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando Det Boletas');
};
exports.createDetBoletas = createDetBoletas;
const updateDetBoletas = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando Det Boletas');
};
exports.updateDetBoletas = updateDetBoletas;
const deleteDetBoletas = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('det Det Boletas');
};
exports.deleteDetBoletas = deleteDetBoletas;
//# sourceMappingURL=detallebol.controller.js.map