import { z } from "zod";

export const postDetalleBolSchema = z.object({
    body: z.object({
        Cantidad: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idBoleta: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idProdCodigo: z.string().max(60).min(3)
    })
})

export const updateDetalleBolSchema = z.object({
    body: z.object({
        Cantidad: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idBoleta: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idProdCodigo: z.string().max(60).min(3).optional()
    }),
    params: z.object({
        idDetalleBoleta: z.string()
    })
})

export const deleteDetalleBolSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        idDetalleBoleta: z.string()
    })
})