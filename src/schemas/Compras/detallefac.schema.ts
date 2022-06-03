import { z } from "zod";

export const postdetFacturaSchema = z.object({
    body: z.object({
        idFactura: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idProdCodigo: z.string().max(60).min(3),
        Cantidad: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1')
    })
})

export const updatedetFacturaSchema = z.object({
    body: z.object({
        idFactura: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idProdCodigo: z.string().max(60).min(3),
        Cantidad: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1')
    }),
    params: z.object({
        idDetalleCompra: z.string()
    })
})

export const deletedetFacturaSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        idDetalleCompra: z.string()
    })
})