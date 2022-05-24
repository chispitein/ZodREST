import { z } from "zod";

export const postestPedidoSchema = z.object({
    body: z.object({
        Estado: z.string().nonempty().min(3, 'Minimo 3 caracteres').max(45, 'Máximo 45 caracteres')
    })
})

export const updateestPedidoSchema = z.object({
    body: z.object({
        Estado: z.string().nonempty().min(3, 'Minimo 3 caracteres').max(45, 'Máximo 45 caracteres').optional()    
    }),
    params: z.object({
        id: z.string()
    })
})

export const deleteestPedidoSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        id: z.string()
    })
})