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
exports.getoneInnerTables = exports.getInnerTablas = exports.UpdateRow = exports.InsertRow = exports.deleteRow = exports.getFilterTabla = exports.getAllTabla = void 0;
const database_1 = require("../database");
//Obtener todos los datos de la tabla, el request no es ocupado, revisar si se puede sacar
const getAllTabla = (tabla) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, database_1.connect)();
        try {
            const result = yield conn.query("select * from " + tabla);
            return res.json(result[0]);
        }
        catch (error) {
            return res.status(500).json({
                Message: "Problemas con el servidor SQL (2)",
                Evento: error,
            });
        }
    }
    catch (error) {
        return res
            .status(500)
            .json({ Message: "Problemas al conectarse a la DB", Evento: error });
    }
});
exports.getAllTabla = getAllTabla;
//Obtener los datos filtrados a traves del request query, pueden ser muchos query en simultaneo
const getFilterTabla = (tabla) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, database_1.connect)();
        try {
            let count = Object.keys(req.query).length;
            let cuenta = 0;
            let sqlstring = "select * from " + tabla + " where ";
            for (let i in req.query) {
                sqlstring =
                    sqlstring +
                        i +
                        " LIKE " +
                        "'%" +
                        Object.values(req.query)[cuenta] +
                        "%' ";
                if (cuenta < count - 1) {
                    sqlstring = sqlstring + "and ";
                }
                cuenta++;
            }
            console.log(sqlstring);
            const result = yield conn.query(sqlstring);
            return res.json(result[0]);
        }
        catch (err) {
            return res
                .status(500)
                .json({ Message: "Problemas con el servidor SQL (2)", Evento: err });
        }
    }
    catch (error) {
        return res
            .status(500)
            .json({ Message: "Problemas al conectarse a la DB", Evento: error });
    }
});
exports.getFilterTabla = getFilterTabla;
//Elimina una fila SOLO EN CASO DE SER NECESARIO, en los otros casos se dará de baja el producto o user
const deleteRow = (tabla) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, database_1.connect)();
        try {
            const result = yield conn.query("delete from " + tabla + " where ?", req.params);
            return res.json({ FilasAfectadas: Object.values(result[0])[1] });
        }
        catch (err) {
            return res
                .status(500)
                .json({ Message: "Problemas con el servidor SQL (2)", Evento: err });
        }
    }
    catch (error) {
        return res
            .status(500)
            .json({ Message: "Problemas al conectarse a la DB", Evento: error });
    }
});
exports.deleteRow = deleteRow;
//Inserta un registro en la tabla y muestra si fue afectada o no
const InsertRow = (tabla) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, database_1.connect)();
        try {
            const resultado = yield conn.query("INSERT INTO " + tabla + " SET ? ", req.body);
            return res.json({
                FilasAfectadas: Object.values(resultado[0])[1],
                UltimoID: Object.values(resultado[0])[2],
            });
        }
        catch (error) {
            return res.status(500).json({
                Message: "Problemas con el servidor SQL (2)",
                Evento: error,
            });
        }
    }
    catch (error) {
        return res
            .status(500)
            .json({ Message: "Problemas al conectarse a la DB", Evento: error });
    }
});
exports.InsertRow = InsertRow;
//Actualiza datos de la tabla mediante el req body para los registros y el req params para saber el id
const UpdateRow = (tabla) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, database_1.connect)();
        try {
            const result = yield conn.query("update " + tabla + " set ? where ?", [
                req.body,
                req.params,
            ]);
            return res.json({
                FilasAfectadas: Object.values(result[0])[1],
                Parametros: req.body,
            });
        }
        catch (err) {
            return res
                .status(500)
                .json({ Message: "Problemas con el servidor SQL (2)", Evento: err });
        }
    }
    catch (error) {
        return res
            .status(500)
            .json({ Message: "Problemas al conectarse a la DB", Evento: error });
    }
});
exports.UpdateRow = UpdateRow;
//Obtener todos los datos de la tabla, el request no es ocupado, revisar si se puede sacar
const getInnerTablas = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, database_1.connect)();
        try {
            const result = yield conn.query("select productos.idProdCodigo, productos.NombreProd ,productos.NombreProd, productos.Cantidad, tipoproducto.TipoProducto,historial.PrecioCompra ,historial.PrecioVenta, historial.PorGanancia, unidadmedidas.Unidad from productos join historial on historial.idProdCodigo = productos.idProdCodigo JOIN tipoproducto on productos.idTipoProducto = tipoproducto.idTipoProducto JOIN unidadmedidas on unidadmedidas.idUnidadMedida = productos.idUnidadMedida;");
            return yield res.json(result[0]);
        }
        catch (error) {
            return res
                .status(500)
                .json({ Message: "Problemas con el servidor SQL (2)", Evento: error });
        }
    }
    catch (error) {
        return res
            .status(500)
            .json({ Message: "Problemas al conectarse a la DB", Evento: error });
    }
});
exports.getInnerTablas = getInnerTablas;
const getoneInnerTables = () => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("request: " + JSON.stringify(req.params));
        const conn = yield (0, database_1.connect)();
        try {
            const result = yield conn.query("select productos.idProdCodigo, productos.NombreProd ,productos.NombreProd, productos.Cantidad, tipoproducto.TipoProducto,historial.PrecioCompra ,historial.PrecioVenta, historial.PorGanancia, unidadmedidas.Unidad from productos join historial on historial.idProdCodigo = productos.idProdCodigo JOIN tipoproducto on productos.idTipoProducto = tipoproducto.idTipoProducto JOIN unidadmedidas on unidadmedidas.idUnidadMedida = productos.idUnidadMedida WHERE productos.?", req.params);
            return yield res.json(result[0]);
        }
        catch (error) {
            return res.status(500).json({
                Message: "Problemas con el servidor SQL (2)",
                Evento: error,
            });
        }
    }
    catch (error) {
        return res
            .status(500)
            .json({ Message: "Problemas al conectarse a la DB", Evento: error });
    }
});
exports.getoneInnerTables = getoneInnerTables;
//# sourceMappingURL=get.middleware.js.map