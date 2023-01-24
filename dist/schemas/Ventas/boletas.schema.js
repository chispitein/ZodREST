"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoletaSchema = exports.updateBoletaSchema = exports.postBoletaSchema = void 0;
const zod_1 = require("zod");
exports.postBoletaSchema = zod_1.z.object({
    body: zod_1.z.object({
        idUser: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idTipoVenta: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
    })
});
exports.updateBoletaSchema = zod_1.z.object({
    body: zod_1.z.object({
        idUser: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idTipoVenta: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
    }),
    params: zod_1.z.object({
        idBoleta: zod_1.z.string().optional()
    })
});
exports.deleteBoletaSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        idBoleta: zod_1.z.string()
    })
});
//# sourceMappingURL=boletas.schema.js.map