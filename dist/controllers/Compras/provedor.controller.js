"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProvedor = exports.updateProvedor = exports.createProvedor = void 0;
const createProvedor = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando Provedor');
};
exports.createProvedor = createProvedor;
const updateProvedor = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando Provedor');
};
exports.updateProvedor = updateProvedor;
const deleteProvedor = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Provedor borrado');
};
exports.deleteProvedor = deleteProvedor;
//# sourceMappingURL=provedor.controller.js.map