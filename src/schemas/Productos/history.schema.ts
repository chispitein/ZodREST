import { z } from "zod";

export const registerHistorySchema = z.object({
    body: z.object({
        PrecioCompra: z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1'),
        PrecioVenta: z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1'),
        PorGanancia: z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1'),
        idProdCodigo: z.number().nonnegative('no puede ser negativo'),
        Actual: z.number().nonnegative('no puede ser negativo').max(2, 'menor que 1'),
    })
})

export const updateHistorySchema = z.object({
    body: z.object({
        PrecioCompra: z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1').optional(),
        PrecioVenta: z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1').optional(),
        PorGanancia: z.number().nonnegative('no puede ser negativo').min(2, 'menor que 1').optional(),
        idProdCodigo: z.number().nonnegative('no puede ser negativo').optional(),
        Actual: z.number().nonnegative('no puede ser negativo').max(2, 'menor que 1').optional(),
    }),
    params: z.object({
        id: z.string()
    })
})

export const deleteHistorySchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros').optional(),
    }),
    params: z.object({
        id: z.string()
    })
})