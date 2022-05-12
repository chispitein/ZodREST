import { Request, Response } from "express";

export const createTipoUser = (req: Request, res: Response) => {
    console.log(req.body);
    res.send('Creando Tipo usuario');
}

export const updateTipoUser = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando Tipo usuario');
}

export const deleteTipoUser = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Tipo usuario borrado');
}