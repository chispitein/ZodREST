"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTipoUserSchema = exports.updateTipoUserSchema = exports.regTipoUserSchema = void 0;
const zod_1 = require("zod");
exports.regTipoUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        Nombre: zod_1.z.string().nonempty('No puede estar vacio').min(4, 'El Tipo no puede tener menos de 3 caracteres')
    })
});
exports.updateTipoUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        Nombre: zod_1.z.string().nonempty('No puede estar vacio').min(4, 'El Tipo no puede tener menos de 3 caracteres')
    }),
    params: zod_1.z.object({
        id: zod_1.z.string()
    })
});
exports.deleteTipoUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(4, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string()
    })
});
//# sourceMappingURL=tipouser.schema.js.map