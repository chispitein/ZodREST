import { z } from "zod";

export const productSchema = z.object({
    body: z.object({
        id: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
        nombre: z.string().nonempty('No puede estar vacio').min(6, 'Contraseña de menos de 6 caracteres')
    })
})

export const updateProductSchema = z.object({
    body: z.object({
        id: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros').optional(),
        nombre: z.string().nonempty('No puede estar vacio').min(6, 'Contraseña de menos de 6 caracteres')
    }),
    params: z.object({
        id: z.string()
    })
})

export const deleteProductSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros').optional(),
    }),
    params: z.object({
        id: z.string()
    })
})