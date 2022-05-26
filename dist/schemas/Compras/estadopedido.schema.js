"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteestPedidoSchema = exports.updateestPedidoSchema = exports.postestPedidoSchema = void 0;
const zod_1 = require("zod");
exports.postestPedidoSchema = zod_1.z.object({
    body: zod_1.z.object({
        Estado: zod_1.z.string().nonempty().min(3, 'Minimo 3 caracteres').max(45, 'Máximo 45 caracteres')
    })
});
exports.updateestPedidoSchema = zod_1.z.object({
    body: zod_1.z.object({
        Estado: zod_1.z.string().nonempty().min(3, 'Minimo 3 caracteres').max(45, 'Máximo 45 caracteres')
    }),
    params: zod_1.z.object({
        id: zod_1.z.string()
    })
});
exports.deleteestPedidoSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string()
    })
});
//# sourceMappingURL=estadopedido.schema.js.map