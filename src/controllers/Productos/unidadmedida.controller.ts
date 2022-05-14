import { Request, Response } from "express";

export const createUnidadMedida = (req: Request, res: Response) => {
    console.log(req.body);
    res.send('Creando UnidadMedida usuario');
}

export const updateUnidadMedida = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando UnidadMedida usuario');
}

export const deleteUnidadMedida = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Tipo UnidadMedida borrado');
}