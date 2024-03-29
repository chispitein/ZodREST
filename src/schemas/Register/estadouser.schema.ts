import { z } from "zod";

export const postEstadoUserSchema = z.object({
    body: z.object({
        EstadoUsuario: z.string().nonempty('No puede estar vacio').min(4, 'El estado no puede tener menos de 3 caracteres')
    })
})

export const updateEstadoUserSchema = z.object({
    body: z.object({
        EstadoUsuario: z.string().nonempty('No puede estar vacio').min(4, 'El estado no puede tener menos de 3 caracteres')
    }),
    params: z.object({
       idEstadoUser: z.string()
    })
})

export const deleteEstadoUserSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(4, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
       idEstadoUser: z.string()
    })
})