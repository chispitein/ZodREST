"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = void 0;
const createUser = (req, res) => {
    console.log(req.body);
    res.send('Creando usuario');
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando usuario');
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('usuario borrado');
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=register.controller.js.map