import { Request, Response } from "express";

export const createBoletas = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando Boletas');
}

export const updateBoletas = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando Boletas');
}

export const deleteBoletas = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('det Boletas');
}