"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHistory = exports.updateHistory = exports.createHistory = void 0;
const createHistory = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando History');
};
exports.createHistory = createHistory;
const updateHistory = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando History');
};
exports.updateHistory = updateHistory;
const deleteHistory = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('History borrada');
};
exports.deleteHistory = deleteHistory;
//# sourceMappingURL=history.controller.js.map