import { z } from "zod";

export const postTipoUserSchema = z.object({
    body: z.object({
        TipoUsuario: z.string().nonempty('No puede estar vacio').min(4, 'El Tipo no puede tener menos de 3 caracteres')
    })
})

export const updateTipoUserSchema = z.object({
    body: z.object({
        TipoUsuario: z.string().nonempty('No puede estar vacio').min(4, 'El Tipo no puede tener menos de 3 caracteres')
    }),
    params: z.object({
        idTipoUser: z.string()
    })
})

export const deleteTipoUserSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(4, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        idTipoUser: z.string()
    })
})