"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUnidadMedidaSchema = exports.updateUnidadMedidaSchema = exports.postUnidadMedidaSchema = void 0;
const zod_1 = require("zod");
exports.postUnidadMedidaSchema = zod_1.z.object({
    body: zod_1.z.object({
        Unidad: zod_1.z.string().nonempty('No puede estar vacio').min(4, 'El Tipo no puede tener menos de 3 caracteres')
    })
});
exports.updateUnidadMedidaSchema = zod_1.z.object({
    body: zod_1.z.object({
        Unidad: zod_1.z.string().nonempty('No puede estar vacio').min(4, 'El Tipo no puede tener menos de 3 caracteres')
    }),
    params: zod_1.z.object({
        idUnidadMedida: zod_1.z.string()
    })
});
exports.deleteUnidadMedidaSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(4, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        idUnidadMedida: zod_1.z.string()
    })
});
//# sourceMappingURL=unmedida.schema.js.map