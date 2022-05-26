"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDetPedidos = exports.updateDetPedidos = exports.createDetPedidos = void 0;
const createDetPedidos = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando det Pedidos');
};
exports.createDetPedidos = createDetPedidos;
const updateDetPedidos = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando det Pedidos');
};
exports.updateDetPedidos = updateDetPedidos;
const deleteDetPedidos = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('det Pedidos borrado');
};
exports.deleteDetPedidos = deleteDetPedidos;
//# sourceMappingURL=detPedidos.controller.js.map