"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFiadoresSchema = exports.updateFiadoresSchema = exports.postFiadoresSchema = void 0;
const zod_1 = require("zod");
exports.postFiadoresSchema = zod_1.z.object({
    body: zod_1.z.object({
        Nombre: zod_1.z.string().min(3).max(45),
        idUser: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idBoleta: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1')
    })
});
exports.updateFiadoresSchema = zod_1.z.object({
    body: zod_1.z.object({
        Nombre: zod_1.z.string().min(3).max(45),
        idUser: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idBoleta: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1')
    }),
    params: zod_1.z.object({
        id: zod_1.z.string()
    })
});
exports.deleteFiadoresSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string()
    })
});
//# sourceMappingURL=fiadores.schema.js.map