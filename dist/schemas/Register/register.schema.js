"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserSchema = exports.updateUserSchema = exports.registerUserSchema = void 0;
const zod_1 = require("zod");
exports.registerUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        Nombre: zod_1.z.string().nonempty('No puede estar vacio').min(6, 'Contraseña de menos de 6 caracteres'),
        SNombre: zod_1.z.string().nonempty('Necesita segundo nombre').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        Apellido: zod_1.z.string().nonempty('Necesita apellido').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        Sapellido: zod_1.z.string().nonempty('Necesita segundo apelli8do').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        idTipoUser: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idEstadoUser: zod_1.z.number().nonnegative().min(1),
        Pass: zod_1.z.string().nonempty('No puede estar vacio').min(6, 'Contraseña de menos de 6 caracteres'),
        Rut: zod_1.z.number().nonnegative().min(1),
        email: zod_1.z.string().email('Email no valido')
    })
});
exports.updateUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        Nombre: zod_1.z.string().nonempty('No puede estar vacio').min(6, 'Contraseña de menos de 6 caracteres'),
        SNombre: zod_1.z.string().nonempty('Necesita segundo nombre').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        Apellido: zod_1.z.string().nonempty('Necesita apellido').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        Sapellido: zod_1.z.string().nonempty('Necesita segundo apelli8do').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        idTipoUser: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        FechaNac: zod_1.z.date(),
        FechaContrato: zod_1.z.date(),
        idEstadoUser: zod_1.z.number().nonnegative().min(1),
        FechaDespido: zod_1.z.date(),
        Pass: zod_1.z.string().nonempty('No puede estar vacio').min(6, 'Contraseña de menos de 6 caracteres'),
        Rut: zod_1.z.number().nonnegative().min(1),
        email: zod_1.z.string().email('Email no valido')
    }),
    params: zod_1.z.object({
        id: zod_1.z.string()
    })
});
exports.deleteUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        id: zod_1.z.string()
    })
});
//# sourceMappingURL=register.schema.js.map