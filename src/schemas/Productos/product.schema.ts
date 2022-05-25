import { z } from "zod";

export const productSchema = z.object({
    body: z.object({
        NombreProd: z.string().nonempty('No puede estar vacio').min(6, 'nombre de menos de 6 caracteres').max(60, "Nombre demasiado largo -60"),
        Tamano: z.string().nonempty(),
        idTipoProducto: z.number().nonnegative(),
        Cantidad: z.number().nonnegative(),
        UnidadMedidas: z.number().nonnegative(),
    })
})

export const updateProductSchema = z.object({
    body: z.object({
        NombreProd: z.string().nonempty('No puede estar vacio').min(6, 'nombre de menos de 6 caracteres').max(60, "Nombre demasiado largo -60").optional(),
        Tamano: z.string().nonempty().optional(),
        idTipoProducto: z.number().nonnegative().optional(),
        Cantidad: z.number().nonnegative().optional(),
        UnidadMedidas: z.number().nonnegative().optional(),
    }),
    params: z.object({
        id: z.string()
    })
})

export const deleteProductSchema = z.object({
    body: z.object({
        pass: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
    }),
    params: z.object({
        id: z.string()
    })
})