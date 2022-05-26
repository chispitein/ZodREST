"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProvedorSchema = exports.updateProvedorSchema = exports.postProvedorSchema = void 0;
const zod_1 = require("zod");
exports.postProvedorSchema = zod_1.z.object({
    body: zod_1.z.object({
        NombreProv: zod_1.z.string().nonempty().min(3, 'Minimo 3 caracteres').max(65, 'Máximo 65 caracteres')
    })
});
exports.updateProvedorSchema = zod_1.z.object({
    body: zod_1.z.object({
        NombreProv: zod_1.z.string().nonempty().min(3, 'Minimo 3 caracteres').max(65, 'Máximo 65 caracteres')
    }),
    params: zod_1.z.object({
        id: zod_1.z.string()
    })
});
exports.deleteProvedorSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string()
    })
});
//# sourceMappingURL=provedores.schema.js.map