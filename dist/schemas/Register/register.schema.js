"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserSchema = exports.updateUserSchema = exports.postUserSchema = void 0;
const zod_1 = require("zod");
exports.postUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        Nombre: zod_1.z.string().nonempty('No puede estar vacio').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        SNombre: zod_1.z.string().nonempty('Necesita segundo nombre').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        Apellido: zod_1.z.string().nonempty('Necesita apellido').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        Sapellido: zod_1.z.string().nonempty('Necesita segundo apelli8do').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        idTipoUser: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idEstadoUser: zod_1.z.number().nonnegative().min(1),
        Pass: zod_1.z.string().nonempty('No puede estar vacio'),
        Rut: zod_1.z.number().nonnegative().min(1),
        email: zod_1.z.string().email('Email no valido'),
        FechaNac: zod_1.z.string(),
        FechaContrato: zod_1.z.string()
    })
});
exports.updateUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        Nombre: zod_1.z.string().nonempty('No puede estar vacio').optional(),
        SNombre: zod_1.z.string().nonempty('Necesita segundo nombre').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract').optional(),
        Apellido: zod_1.z.string().nonempty('Necesita apellido').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract').optional(),
        Sapellido: zod_1.z.string().nonempty('Necesita segundo apelli8do').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract').optional(),
        idTipoUser: zod_1.z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        FechaNac: zod_1.z.date().optional(),
        FechaContrato: zod_1.z.date().optional(),
        idEstadoUser: zod_1.z.number().nonnegative().min(1).optional(),
        FechaDespido: zod_1.z.date().optional(),
        Pass: zod_1.z.string().nonempty('No puede estar vacio').optional(),
        Rut: zod_1.z.number().nonnegative().min(1).optional(),
        email: zod_1.z.string().email('Email no valido').optional()
    }),
    params: zod_1.z.object({
        idUser: zod_1.z.string()
    })
});
exports.deleteUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: zod_1.z.object({
        idUser: zod_1.z.string()
    })
});
//# sourceMappingURL=register.schema.js.map