import { Request, Response } from "express";

export const createPedido = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando Pedido');
}

export const updatePedido = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando Pedido');
}

export const deletePedido = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Pedido borrado');
}