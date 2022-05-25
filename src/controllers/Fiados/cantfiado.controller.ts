import { Request, Response } from "express";

export const createCantFiado = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando CantFiado');
}

export const updateCantFiado = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando CantFiado');
}

export const deleteCantFiado = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('det CantFiado');
}