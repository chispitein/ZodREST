"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePedidoSchema = exports.updatePedidoSchema = exports.postPedidoSchema = void 0;
const zod_1 = require("zod");
exports.postPedidoSchema = zod_1.z.object({
    body: zod_1.z.object({
        idProvedor: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idUser: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idEstadoPedido: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1')
    })
});
exports.updatePedidoSchema = zod_1.z.object({
    body: zod_1.z.object({
        idProvedor: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idUser: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idEstadoPedido: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional()
    }),
    params: zod_1.z.object({
        idPedido: zod_1.z.string()
    })
});
exports.deletePedidoSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        idPedido: zod_1.z.string()
    })
});
//# sourceMappingURL=pedidos.schema.js.map