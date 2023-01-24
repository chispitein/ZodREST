"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFacturaSchema = exports.updateFacturaSchema = exports.postFacturaSchema = void 0;
const zod_1 = require("zod");
exports.postFacturaSchema = zod_1.z.object({
    body: zod_1.z.object({
        idProvedor: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idUser: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
    })
});
exports.updateFacturaSchema = zod_1.z.object({
    body: zod_1.z.object({
        idProvedor: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idUser: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
    }),
    params: zod_1.z.object({
        idFactura: zod_1.z.string()
    })
});
exports.deleteFacturaSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        idFactura: zod_1.z.string()
    })
});
//# sourceMappingURL=factura.schema.js.map