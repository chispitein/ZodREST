import { Request, Response } from "express";

export const createTipoProduct = (req: Request, res: Response) => {
    console.log(req.body);
    res.send('Creando Tipo Product');
}

export const updateTipoProduct = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Actualizando Tipo Product');
}

export const deleteTipoProduct = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Tipo usuario Product');
}