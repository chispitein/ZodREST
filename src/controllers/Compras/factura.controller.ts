import { Request, Response } from "express";

export const createFactura = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando Factura');
}

export const updateFactura = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando Factura');
}

export const deleteFactura = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Factura borrado');
}