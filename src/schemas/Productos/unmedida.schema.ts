import { z } from "zod";

export const postUnidadMedidaSchema = z.object({
    body: z.object({
        Unidad: z.string().nonempty('No puede estar vacio').min(4, 'El Tipo no puede tener menos de 3 caracteres')
    })
})

export const updateUnidadMedidaSchema = z.object({
    body: z.object({
        Unidad: z.string().nonempty('No puede estar vacio').min(4, 'El Tipo no puede tener menos de 3 caracteres')
    }),
    params: z.object({
        idUnidadMedida: z.string()
    })
})

export const deleteUnidadMedidaSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(4, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        idUnidadMedida: z.string()
    })
})