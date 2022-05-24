import { Request, Response } from "express";

export const createDetFactura = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando det Factura');
}

export const updateDetFactura = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando det Factura');
}

export const deleteDetFactura = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('det Factura borrado');
}