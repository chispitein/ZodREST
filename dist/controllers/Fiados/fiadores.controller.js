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
exports.deleteFiadores = exports.updateFiadores = exports.getbyidFiador = exports.createFiadores = void 0;
const database_1 = require("../../database");
const createFiadores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.body;
    const conn = yield (0, database_1.connect)();
    yield conn.query('INSERT INTO boletas SET ?', [query]);
});
exports.createFiadores = createFiadores;
function getbyidFiador(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        let count = Object.keys(req.query).length;
        let cuenta = 0;
        let sqlstring = 'select * from boletas where ';
        for (let i in req.query) {
            sqlstring = sqlstring + i + ' = ' + "'" + Object.values(req.query)[cuenta] + "' ";
            if (cuenta < count - 1) {
                sqlstring = sqlstring + 'and ';
            }
            cuenta++;
        }
        console.log(sqlstring);
        const result = yield conn.query(sqlstring);
        return res.json(result[0]);
    });
}
exports.getbyidFiador = getbyidFiador;
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