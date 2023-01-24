"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCajaSchema = exports.updateCajaSchema = exports.postCajaSchema = void 0;
const zod_1 = require("zod");
exports.postCajaSchema = zod_1.z.object({
    body: zod_1.z.object({
        TotalCaja: zod_1.z.number().nonnegative('No puede ser negativo').min(50000, 'No contiene la suficiente cantidad de numeros'),
        TotalTarjeta: zod_1.z.number().nonnegative('No puede ser negativo').min(1, 'No contiene la suficiente cantidad de numeros'),
        TotalTransf: zod_1.z.number().nonnegative('No puede ser negativo'),
        SiguienteDia: zod_1.z.number().nonnegative('No puede ser negativo').min(10000, 'No contiene la suficiente cantidad de numeros').max(100000)
    })
});
exports.updateCajaSchema = zod_1.z.object({
    body: zod_1.z.object({
        TotalCaja: zod_1.z.number().nonnegative('No puede ser negativo').min(50000, 'No contiene la suficiente cantidad de numeros').optional(),
        TotalTarjeta: zod_1.z.number().nonnegative('No puede ser negativo').min(1, 'No contiene la suficiente cantidad de numeros').optional(),
        TotalTransf: zod_1.z.number().nonnegative('No puede ser negativo').optional(),
        SiguienteDia: zod_1.z.number().nonnegative('No puede ser negativo').min(10000, 'No contiene la suficiente cantidad de numeros').max(100000).optional()
    }),
    params: zod_1.z.object({
        idCaja: zod_1.z.string()
    })
});
exports.deleteCajaSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(4, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        idCaja: zod_1.z.string()
    })
});
//# sourceMappingURL=cajas.schema.js.map