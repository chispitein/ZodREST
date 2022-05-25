import { z } from "zod";

export const registerUserSchema = z.object({
    body: z.object({
        Nombre: z.string().nonempty('No puede estar vacio').min(6, 'Contraseña de menos de 6 caracteres'),
        SNombre: z.string().nonempty('Necesita segundo nombre').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        Apellido: z.string().nonempty('Necesita apellido').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        Sapellido: z.string().nonempty('Necesita segundo apelli8do').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        idTipoUser: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idEstadoUser: z.number().nonnegative().min(1),
        Pass: z.string().nonempty('No puede estar vacio').min(6, 'Contraseña de menos de 6 caracteres'),
        Rut: z.number().nonnegative().min(1),
        email: z.string().email('Email no valido')
    })
})

export const updateUserSchema = z.object({
    body: z.object({
        Nombre: z.string().nonempty('No puede estar vacio').min(6, 'Contraseña de menos de 6 caracteres'),
        SNombre: z.string().nonempty('Necesita segundo nombre').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        Apellido: z.string().nonempty('Necesita apellido').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        Sapellido: z.string().nonempty('Necesita segundo apelli8do').min(3, 'Menos de 3 caracteres').max(45, 'max de 45 caract'),
        idTipoUser: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        FechaNac: z.date(),
        FechaContrato: z.date(),
        idEstadoUser: z.number().nonnegative().min(1),
        FechaDespido: z.date(),
        Pass: z.string().nonempty('No puede estar vacio').min(6, 'Contraseña de menos de 6 caracteres'),
        Rut: z.number().nonnegative().min(1),
        email: z.string().email('Email no valido')
    }),
    params: z.object({
        id: z.string()
    })
})

export const deleteUserSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        id: z.string()
    })
})