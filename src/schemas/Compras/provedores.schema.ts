import { z } from "zod";

export const postProvedorSchema = z.object({
    body: z.object({
        NombreProv: z.string().nonempty().min(3, 'Minimo 3 caracteres').max(65, 'Máximo 65 caracteres')
    })
})

export const updateProvedorSchema = z.object({
    body: z.object({
        NombreProv: z.string().nonempty().min(3, 'Minimo 3 caracteres').max(65, 'Máximo 65 caracteres')
    }),
    params: z.object({
        id: z.string()
    })
})

export const deleteProvedorSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        id: z.string() 
    })
})