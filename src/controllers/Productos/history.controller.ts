import { Request, Response } from "express";

export const createHistory = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando History');
}

export const updateHistory = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando History');
}

export const deleteHistory = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('History borrada');
}