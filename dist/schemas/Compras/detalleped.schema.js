"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedetPedidoSchema = exports.updatedetPedidoSchema = exports.postdetPedidoSchema = void 0;
const zod_1 = require("zod");
exports.postdetPedidoSchema = zod_1.z.object({
    body: zod_1.z.object({
        Producto: zod_1.z.string().nonempty().min(3, 'Minimo 3 caracteres').max(45, 'Máximo 45 caracteres'),
        Cantidad: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idPedido: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1')
    })
});
exports.updatedetPedidoSchema = zod_1.z.object({
    body: zod_1.z.object({
        Producto: zod_1.z.string().nonempty().min(3, 'Minimo 3 caracteres').max(45, 'Máximo 45 caracteres'),
        Cantidad: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idPedido: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1')
    }),
    params: zod_1.z.object({
        id: zod_1.z.string()
    })
});
exports.deletedetPedidoSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string()
    })
});
//# sourceMappingURL=detalleped.schema.js.map