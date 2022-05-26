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
exports.deleteFiadores = exports.updateFiadores = exports.createFiadores = void 0;
const database_1 = require("../../database");
const createFiadores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    const conn = yield (0, database_1.connect)();
    yield conn.query('INSERT INTO boletas SET ?', [query]);
});
exports.createFiadores = createFiadores;
const updateFiadores = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando Fiadores');
};
exports.updateFiadores = updateFiadores;
const deleteFiadores = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('det Fiadores');
};
exports.deleteFiadores = deleteFiadores;
//# sourceMappingURL=fiadores.controller.js.map