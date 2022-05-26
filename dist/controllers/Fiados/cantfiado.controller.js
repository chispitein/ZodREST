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
exports.deleteCantFiado = exports.updateCantFiado = exports.createCantFiado = exports.getCantFiado = void 0;
const database_1 = require("../../database");
function getCantFiado(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const result = yield conn.query('select * from cantidadfiado');
        return res.json(result[0]);
    });
}
exports.getCantFiado = getCantFiado;
function createCantFiado(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const query = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO cantidadfiado SET ?', [query]);
    });
}
exports.createCantFiado = createCantFiado;
const updateCantFiado = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando CantFiado');
};
exports.updateCantFiado = updateCantFiado;
const deleteCantFiado = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('det CantFiado');
};
exports.deleteCantFiado = deleteCantFiado;
//# sourceMappingURL=cantfiado.controller.js.map