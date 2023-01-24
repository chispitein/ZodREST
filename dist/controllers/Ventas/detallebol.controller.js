"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDetBoletas = exports.updateDetBoletas = exports.createDetBoletas = void 0;
const database_1 = require("../../database");
function createDetBoletas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const pregunta = req.body;
        const conn = yield (0, database_1.connect)();
        const resultado = conn.query('INSERT INTO detalleboletas SET ?', [pregunta]);
        res.send('Creando Det Boletas');
    });
}
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