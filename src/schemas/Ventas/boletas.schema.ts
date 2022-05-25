import { z } from "zod";

export const postFacturaSchema = z.object({
    body: z.object({
        idUser: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idTipoVenta: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
    })
})

export const updateFacturaSchema = z.object({
    body: z.object({
        idUser: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idTipoVenta: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
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