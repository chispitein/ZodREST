"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEstadoUserSchema = exports.updateEstadoUserSchema = exports.postEstadoUserSchema = void 0;
const zod_1 = require("zod");
exports.postEstadoUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        EstadoUsuario: zod_1.z.string().nonempty('No puede estar vacio').min(4, 'El estado no puede tener menos de 3 caracteres')
    })
});
exports.updateEstadoUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        EstadoUsuario: zod_1.z.string().nonempty('No puede estar vacio').min(4, 'El estado no puede tener menos de 3 caracteres')
    }),
    params: zod_1.z.object({
        idEstadoUser: zod_1.z.string()
    })
});
exports.deleteEstadoUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(4, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        idEstadoUser: zod_1.z.string()
    })
});
//# sourceMappingURL=estadouser.schema.js.map