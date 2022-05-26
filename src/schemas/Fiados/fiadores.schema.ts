import { z } from "zod";

export const postFiadoresSchema = z.object({
    body: z.object({
        Nombre: z.string().min(3).max(45),
        idUser: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idBoleta: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1')
    })
})

export const updateFiadoresSchema = z.object({
    body: z.object({
        Nombre: z.string().min(3).max(45),
        idUser: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1'),
        idBoleta: z.number().nonnegative('no puede ser negativo').min(1, 'menor que 1')
    }),
    params: z.object({
        idFiador: z.string()
    })
})

export const deleteFiadoresSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        id: z.string()
    })
})