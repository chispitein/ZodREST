import { Request, Response } from "express";

export const createEstPedidos = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando estado Pedidos');
}

export const updateEstPedidos = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando estado Pedidos');
}

export const deleteEstPedidos = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('estado Pedidos borrado');
}