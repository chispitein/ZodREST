import { Request, Response } from "express";

export const createProvedor = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando Provedor');
}

export const updateProvedor = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando Provedor');
}

export const deleteProvedor = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Provedor borrado');
}