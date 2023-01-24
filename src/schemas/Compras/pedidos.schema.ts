import { z } from "zod";

export const postPedidoSchema = z.object({
    body: z.object({
        idProvedor: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idUser: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idEstadoPedido: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1')
    })
})

export const updatePedidoSchema = z.object({
    body: z.object({
        idProvedor: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idUser: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        idEstadoPedido: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional()
    }),
    params: z.object({
        idPedido: z.string()
    })
})

export const deletePedidoSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        idPedido: z.string()
    })
})