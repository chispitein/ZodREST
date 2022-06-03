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
exports.deleteBoletas = exports.updateBoletas = exports.createBoletas = void 0;
const database_1 = require("../../database");
function createBoletas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const pregunta = req.body;
        const conn = yield (0, database_1.connect)();
        const resultado = yield conn.query('INSERT INTO boletas SET ?', [pregunta]);
        res.send('Creando Boletas');
    });
}
exports.createBoletas = createBoletas;
const updateBoletas = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando Boletas');
};
exports.updateBoletas = updateBoletas;
const deleteBoletas = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('det Boletas');
};
exports.deleteBoletas = deleteBoletas;
//# sourceMappingURL=boletas.controller.js.map