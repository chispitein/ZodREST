"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEstadoUser = exports.updateEstadoUser = exports.createEstadoUser = void 0;
const createEstadoUser = (req, res) => {
    console.log(req.body);
    res.send('Creando Estado usuario');
};
exports.createEstadoUser = createEstadoUser;
const updateEstadoUser = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando Estado usuario');
};
exports.updateEstadoUser = updateEstadoUser;
const deleteEstadoUser = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Estado usuario borrado');
};
exports.deleteEstadoUser = deleteEstadoUser;
//# sourceMappingURL=estadouser.controller.js.map