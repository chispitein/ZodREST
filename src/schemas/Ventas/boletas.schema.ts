import { z } from "zod";

export const postBoletaSchema = z.object({
    body: z.object({
        idUser: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idTipoVenta: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
    })
})

export const updateBoletaSchema = z.object({
    body: z.object({
        idUser: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idTipoVenta: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
    }),
    params: z.object({
        id: z.string().optional()
    })
})

export const deleteBoletaSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        id: z.string()
    })
})