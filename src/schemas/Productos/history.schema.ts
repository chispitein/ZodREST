import { z } from "zod";

export const postHistorySchema = z.object({
    body: z.object({
        PrecioCompra: z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1'),
        PrecioVenta: z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1'),
        PorGanancia: z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1'),
        idProdCodigo: z.string().max(60).min(3),
        Actual: z.number().nonnegative('no puede ser negativo').max(2, 'menor que 1'),
    })
})

export const updateHistorySchema = z.object({
    body: z.object({
        PrecioCompra: z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1').optional(),
        PrecioVenta: z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1').optional(),
        PorGanancia: z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1').optional(),
        idProdCodigo: z.string().max(60).min(3).optional(),
        Actual: z.number().nonnegative('no puede ser negativo').max(2, 'menor que 1').optional(),
    }),
    params: z.object({
        idHistorial: z.string()
    })
})

export const deleteHistorySchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        idHistorial: z.string()
    })
})