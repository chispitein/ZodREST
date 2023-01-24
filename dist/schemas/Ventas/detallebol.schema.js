"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDetalleBolSchema = exports.updateDetalleBolSchema = exports.postDetalleBolSchema = void 0;
const zod_1 = require("zod");
exports.postDetalleBolSchema = zod_1.z.object({
    body: zod_1.z.object({
        Cantidad: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idBoleta: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idProdCodigo: zod_1.z.string().max(60).min(3)
    })
});
exports.updateDetalleBolSchema = zod_1.z.object({
    body: zod_1.z.object({
        Cantidad: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idBoleta: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idProdCodigo: zod_1.z.string().max(60).min(3).optional()
    }),
    params: zod_1.z.object({
        idDetalleBoleta: zod_1.z.string()
    })
});
exports.deleteDetalleBolSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        idDetalleBoleta: zod_1.z.string()
    })
});
//# sourceMappingURL=detallebol.schema.js.map