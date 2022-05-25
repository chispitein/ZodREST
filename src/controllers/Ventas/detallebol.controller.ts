import { Request, Response } from "express";

export const createDetBoletas = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando Det Boletas');
}

export const updateDetBoletas = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando Det Boletas');
}

export const deleteDetBoletas = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('det Det Boletas');
}