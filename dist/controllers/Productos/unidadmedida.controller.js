"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUnidadMedida = exports.updateUnidadMedida = exports.createUnidadMedida = void 0;
const createUnidadMedida = (req, res) => {
    console.log(req.body);
    res.send('Creando UnidadMedida usuario');
};
exports.createUnidadMedida = createUnidadMedida;
const updateUnidadMedida = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando UnidadMedida usuario');
};
exports.updateUnidadMedida = updateUnidadMedida;
const deleteUnidadMedida = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Tipo UnidadMedida borrado');
};
exports.deleteUnidadMedida = deleteUnidadMedida;
//# sourceMappingURL=unidadmedida.controller.js.map