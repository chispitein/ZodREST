"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTipoProduct = exports.updateTipoProduct = exports.createTipoProduct = void 0;
const createTipoProduct = (req, res) => {
    console.log(req.body);
    res.send('Creando Tipo Product');
};
exports.createTipoProduct = createTipoProduct;
const updateTipoProduct = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando Tipo Product');
};
exports.updateTipoProduct = updateTipoProduct;
const deleteTipoProduct = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Tipo usuario Product');
};
exports.deleteTipoProduct = deleteTipoProduct;
//# sourceMappingURL=tipoprod.controller.js.map