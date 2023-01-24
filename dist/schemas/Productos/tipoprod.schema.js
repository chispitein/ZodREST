"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTipoProductSchema = exports.updateTipoProductSchema = exports.postTipoProductSchema = void 0;
const zod_1 = require("zod");
exports.postTipoProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        TipoProducto: zod_1.z.string().nonempty('No puede estar vacio').min(4, 'El Tipo no puede tener menos de 3 caracteres')
    })
});
exports.updateTipoProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        TipoProducto: zod_1.z.string().nonempty('No puede estar vacio').min(4, 'El Tipo no puede tener menos de 3 caracteres')
    }),
    params: zod_1.z.object({
        idTipoProducto: zod_1.z.string()
    })
});
exports.deleteTipoProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(4, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        idTipoProducto: zod_1.z.string()
    })
});
//# sourceMappingURL=tipoprod.schema.js.map