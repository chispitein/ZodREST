import { Request, Response } from "express";

export const createDetPedidos = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando det Pedidos');
}

export const updateDetPedidos = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando det Pedidos');
}

export const deleteDetPedidos = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('det Pedidos borrado');
}