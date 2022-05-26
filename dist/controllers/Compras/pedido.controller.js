"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePedido = exports.updatePedido = exports.createPedido = void 0;
const createPedido = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando Pedido');
};
exports.createPedido = createPedido;
const updatePedido = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando Pedido');
};
exports.updatePedido = updatePedido;
const deletePedido = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Pedido borrado');
};
exports.deletePedido = deletePedido;
//# sourceMappingURL=pedido.controller.js.map