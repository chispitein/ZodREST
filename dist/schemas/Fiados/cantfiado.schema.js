"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCantidadFiadoSchema = exports.updateCantidadFiadoSchema = exports.postCantidadFiadoSchema = void 0;
const zod_1 = require("zod");
exports.postCantidadFiadoSchema = zod_1.z.object({
    body: zod_1.z.object({
        idFiador: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        Cantidad: zod_1.z.number().nonnegative('no puede ser negativo')
    })
});
exports.updateCantidadFiadoSchema = zod_1.z.object({
    body: zod_1.z.object({
        idFiador: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        Cantidad: zod_1.z.number().nonnegative('no puede ser negativo').optional()
    }),
    params: zod_1.z.object({
        idCantidadFiado: zod_1.z.string()
    })
});
exports.deleteCantidadFiadoSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        idCantidadFiado: zod_1.z.string()
    })
});
//# sourceMappingURL=cantfiado.schema.js.map