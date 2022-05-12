import { z } from "zod";

export const regEstadoUserSchema = z.object({
    body: z.object({
        TotalCaja: z.number().nonnegative('No puede ser negativo').min(50000, 'No contiene la suficiente cantidad de numeros'),
        TotalTarjeta: z.number().nonnegative('No puede ser negativo').min(1, 'No contiene la suficiente cantidad de numeros'),
        TotalTransf: z.number().nonnegative('No puede ser negativo'),
        SiguienteDia: z.number().nonnegative('No puede ser negativo').min(10000, 'No contiene la suficiente cantidad de numeros').max(100000)
    }),
    params: z.object({
        id: z.string()
    })
})

export const updateEstadoUserSchema = z.object({
    body: z.object({
        TotalCaja: z.number().nonnegative('No puede ser negativo').min(50000, 'No contiene la suficiente cantidad de numeros').optional(),
        TotalTarjeta: z.number().nonnegative('No puede ser negativo').min(1, 'No contiene la suficiente cantidad de numeros').optional(),
        TotalTransf: z.number().nonnegative('No puede ser negativo').optional(),
        SiguienteDia: z.number().nonnegative('No puede ser negativo').min(10000, 'No contiene la suficiente cantidad de numeros').max(100000).optional()
    }),
    params: z.object({
        id: z.string()
    }) 
})

export const deleteEstadoUserSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(4, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        id: z.string()
    })
})