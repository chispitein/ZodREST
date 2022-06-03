import { optional, z } from "zod";

export const postdetPedidoSchema = z.object({
    body: z.object({
        Producto: z.string().nonempty().min(3, 'Minimo 3 caracteres').max(45, 'Máximo 45 caracteres'),
        Cantidad: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idPedido: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1')        
    })
})

export const updatedetPedidoSchema = z.object({
    body: z.object({
        Producto: z.string().nonempty().min(3, 'Minimo 3 caracteres').max(45, 'Máximo 45 caracteres').optional(),
        Cantidad: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idPedido: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional()     
    }),
    params: z.object({
        idDetallePedidos: z.string()
    })
})

export const deletedetPedidoSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        idDetallePedidos: z.string()
    })
})