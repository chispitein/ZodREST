"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWishList = exports.updateWishList = exports.createWishList = void 0;
const createWishList = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando WishList');
};
exports.createWishList = createWishList;
const updateWishList = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando WishList');
};
exports.updateWishList = updateWishList;
const deleteWishList = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Provedor WishList');
};
exports.deleteWishList = deleteWishList;
//# sourceMappingURL=wishlist.controller.js.map