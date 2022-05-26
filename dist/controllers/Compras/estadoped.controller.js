"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEstPedidos = exports.updateEstPedidos = exports.createEstPedidos = void 0;
const createEstPedidos = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando estado Pedidos');
};
exports.createEstPedidos = createEstPedidos;
const updateEstPedidos = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando estado Pedidos');
};
exports.updateEstPedidos = updateEstPedidos;
const deleteEstPedidos = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('estado Pedidos borrado');
};
exports.deleteEstPedidos = deleteEstPedidos;
//# sourceMappingURL=estadoped.controller.js.map