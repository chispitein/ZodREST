import { Request, Response } from "express";

export const createTipoVenta = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando TipoVenta');
}

export const updateTipoVenta = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando TipoVenta');
}

export const deleteTipoVenta = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('det TipoVenta');
}