import { z } from "zod";

export const loginSchema = z.object({
    body: z.object({
        rut: z.number().nonnegative('No puede ser negativo').min(6, 'No contiene la suficiente cantidad de numeros'),
        pass: z.string().nonempty('No puede estar vacio').min(6, 'Contraseña de menos de 6 caracteres')
    })
})