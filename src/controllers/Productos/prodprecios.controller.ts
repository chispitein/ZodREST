import { Request, Response } from "express";

export const createprodprecios = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando prodprecios');
}

export const updateprodprecios = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando prodprecios');
}

export const deleteprodprecios = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('prodprecios borrada');
}