"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHistorySchema = exports.updateHistorySchema = exports.postHistorySchema = void 0;
const zod_1 = require("zod");
exports.postHistorySchema = zod_1.z.object({
    body: zod_1.z.object({
        PrecioCompra: zod_1.z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1'),
        PrecioVenta: zod_1.z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1'),
        PorGanancia: zod_1.z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1'),
        idProdCodigo: zod_1.z.string().max(60).min(3),
        Actual: zod_1.z.number().nonnegative('no puede ser negativo').max(2, 'menor que 1'),
    })
});
exports.updateHistorySchema = zod_1.z.object({
    body: zod_1.z.object({
        PrecioCompra: zod_1.z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1').optional(),
        PrecioVenta: zod_1.z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1').optional(),
        PorGanancia: zod_1.z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1').optional(),
        idProdCodigo: zod_1.z.string().max(60).min(3).optional(),
        Actual: zod_1.z.number().nonnegative('no puede ser negativo').max(2, 'menor que 1').optional(),
    }),
    params: zod_1.z.object({
        idHistorial: zod_1.z.string()
    })
});
exports.deleteHistorySchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        idHistorial: zod_1.z.string()
    })
});
//# sourceMappingURL=history.schema.js.map