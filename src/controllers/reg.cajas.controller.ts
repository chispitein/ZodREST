import { Request, Response } from "express";

export const createCaja = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando Caja');
}

export const updateCaja = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando Caja');
}

export const deleteCaja = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Caja borrada');
}