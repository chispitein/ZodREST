"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    body: zod_1.z.object({
        rut: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
        pass: zod_1.z.string().nonempty('No puede estar vacio').min(6, 'Contraseña de menos de 6 caracteres')
    })
});
//# sourceMappingURL=auth.schema.js.map