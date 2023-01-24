"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTipoVentarSchema = exports.updateTipoVentaSchema = exports.postTipoVentaSchema = void 0;
const zod_1 = require("zod");
exports.postTipoVentaSchema = zod_1.z.object({
    body: zod_1.z.object({
        Tipo: zod_1.z.string().nonempty().min(3, 'Minimo 3 caracteres').max(40, 'Máximo 40 caracteres')
    })
});
exports.updateTipoVentaSchema = zod_1.z.object({
    body: zod_1.z.object({
        Tipo: zod_1.z.string().nonempty().min(3, 'Minimo 3 caracteres').max(40, 'Máximo 65 caracteres')
    }),
    params: zod_1.z.object({
        idTipoVenta: zod_1.z.string()
    })
});
exports.deleteTipoVentarSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        idTipoVenta: zod_1.z.string()
    })
});
//# sourceMappingURL=tipoventas.schema.js.map