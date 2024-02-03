"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductSchema = exports.updateProductSchema = exports.postProductSchema = void 0;
const zod_1 = require("zod");
exports.postProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        NombreProd: zod_1.z
            .string()
            .nonempty("No puede estar vacio")
            .min(6, "nombre de menos de 6 caracteres")
            .max(60, "Nombre demasiado largo -60"),
        Tamano: zod_1.z.string().nonempty(),
        idTipoProducto: zod_1.z.number().nonnegative(),
        Cantidad: zod_1.z.string().nonempty(),
        idUnidadMedida: zod_1.z.number().nonnegative(),
    }),
});
exports.updateProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        NombreProd: zod_1.z
            .string()
            .nonempty("No puede estar vacio")
            .min(6, "nombre de menos de 6 caracteres")
            .max(60, "Nombre demasiado largo -60")
            .optional(),
        Tamano: zod_1.z.string().nonempty().optional(),
        idTipoProducto: zod_1.z.number().nonnegative().optional(),
        Cantidad: zod_1.z.number().nonnegative().optional(),
        idUnidadMedida: zod_1.z.number().nonnegative().optional(),
    }),
    params: zod_1.z.object({
        idProdCodigo: zod_1.z.string(),
    }),
});
exports.deleteProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        pass: zod_1.z
            .number()
            .nonnegative("No puede ser negativo")
            .min(6, "No contiene la suficiente cantidad de numeros"),
    }),
    params: zod_1.z.object({
        idProdCodigo: zod_1.z.string(),
    }),
});
//# sourceMappingURL=product.schema.js.map