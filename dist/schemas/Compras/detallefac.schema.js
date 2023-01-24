"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedetFacturaSchema = exports.updatedetFacturaSchema = exports.postdetFacturaSchema = void 0;
const zod_1 = require("zod");
exports.postdetFacturaSchema = zod_1.z.object({
    body: zod_1.z.object({
        idFactura: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idProdCodigo: zod_1.z.string().max(60).min(3),
        Cantidad: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1')
    })
});
exports.updatedetFacturaSchema = zod_1.z.object({
    body: zod_1.z.object({
        idFactura: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idProdCodigo: zod_1.z.string().max(60).min(3).optional(),
        Cantidad: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional()
    }),
    params: zod_1.z.object({
        idDetalleCompra: zod_1.z.string()
    })
});
exports.deletedetFacturaSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        idDetalleCompra: zod_1.z.string()
    }),
    query: zod_1.z.object({
        id: zod_1.z.void()
    })
}).strict();
//# sourceMappingURL=detallefac.schema.js.map