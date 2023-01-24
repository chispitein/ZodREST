import { z } from "zod";

export const postTipoVentaSchema = z.object({
    body: z.object({
        Tipo: z.string().nonempty().min(3, 'Minimo 3 caracteres').max(40, 'Máximo 40 caracteres')
    })
})

export const updateTipoVentaSchema = z.object({
    body: z.object({
        Tipo: z.string().nonempty().min(3, 'Minimo 3 caracteres').max(40, 'Máximo 65 caracteres')
    }),
    params: z.object({
        idTipoVenta: z.string()
    })
})

export const deleteTipoVentarSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        idTipoVenta: z.string() 
    })
})