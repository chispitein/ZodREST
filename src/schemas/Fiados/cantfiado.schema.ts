import { z } from "zod";
import { Request, Response } from "express";


export const postCantidadFiadoSchema = z.object({
    body: z.object({
        idFiador: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        Cantidad: z.number().nonnegative('no puede ser negativo')
    })
})

export const updateCantidadFiadoSchema = z.object({
    body: z.object({
        idFiador: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1').optional(),
        Cantidad: z.number().nonnegative('no puede ser negativo').optional()
    }),
    params: z.object({
        idCantidadFiado: z.string()
    })
})

export const deleteCantidadFiadoSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        idCantidadFiado: z.string()
    })
})