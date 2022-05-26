"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTipoUser = exports.updateTipoUser = exports.createTipoUser = void 0;
const createTipoUser = (req, res) => {
    console.log(req.body);
    res.send('Creando Tipo usuario');
};
exports.createTipoUser = createTipoUser;
const updateTipoUser = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando Tipo usuario');
};
exports.updateTipoUser = updateTipoUser;
const deleteTipoUser = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Tipo usuario borrado');
};
exports.deleteTipoUser = deleteTipoUser;
//# sourceMappingURL=tipouser.controller.js.map