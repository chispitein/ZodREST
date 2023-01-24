"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWishListSSchema = exports.updateWishListSSchema = exports.postWishListSchema = void 0;
const zod_1 = require("zod");
exports.postWishListSchema = zod_1.z.object({
    body: zod_1.z.object({
        Producto: zod_1.z.string().nonempty().min(3, 'Minimo 3 caracteres').max(45, 'Máximo 45 caracteres')
    })
});
exports.updateWishListSSchema = zod_1.z.object({
    body: zod_1.z.object({
        Producto: zod_1.z.string().nonempty().min(3, 'Minimo 3 caracteres').max(45, 'Máximo 45 caracteres')
    }),
    params: zod_1.z.object({
        idWishList: zod_1.z.string()
    })
});
exports.deleteWishListSSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        idWishList: zod_1.z.string()
    })
});
//# sourceMappingURL=wishlist.schema.js.map