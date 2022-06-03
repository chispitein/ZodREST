import { z } from "zod";

export const postFacturaSchema = z.object({
    body: z.object({
        idProvedor: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idUser: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
    })
})

export const updateFacturaSchema = z.object({
    body: z.object({
        idProvedor: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idUser: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
    }),
    params: z.object({
        id: z.string()
    })
})

export const deleteFacturaSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        id: z.string()
    })
})