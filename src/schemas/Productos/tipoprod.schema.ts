import { z } from "zod";

export const regTipoProductSchema = z.object({
    body: z.object({
        TipoProducto: z.string().nonempty('No puede estar vacio').min(4, 'El Tipo no puede tener menos de 3 caracteres')
    })
})

export const updateTipoProductSchema = z.object({
    body: z.object({
        TipoProducto: z.string().nonempty('No puede estar vacio').min(4, 'El Tipo no puede tener menos de 3 caracteres')
    }),
    params: z.object({
        id: z.string()
    })
})

export const deleteTipoProductSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(4, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        id: z.string()
    })
})