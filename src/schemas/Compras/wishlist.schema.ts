import { z } from "zod";

export const postWishListSchema = z.object({
    body: z.object({
        Producto: z.string().nonempty().min(3, 'Minimo 3 caracteres').max(45, 'Máximo 45 caracteres')
    })
})

export const updateWishListSSchema = z.object({
    body: z.object({
        Producto: z.string().nonempty().min(3, 'Minimo 3 caracteres').max(45, 'Máximo 45 caracteres')    
    }),
    params: z.object({
        id: z.string()
    })
})

export const deleteWishListSSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        id: z.string()
    })
})