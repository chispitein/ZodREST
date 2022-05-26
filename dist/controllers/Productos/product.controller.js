"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateproduct = exports.createproduct = void 0;
const createproduct = (req, res) => {
    console.log(req.body);
    res.send('creating product');
};
exports.createproduct = createproduct;
const updateproduct = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('updating product');
};
exports.updateproduct = updateproduct;
const deleteProduct = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Producto borrado');
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.controller.js.map