import { Request, Response } from "express";

export const createFiadores = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando Fiadores');
}

export const updateFiadores = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando Fiadores');
}

export const deleteFiadores = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('det Fiadores');
}