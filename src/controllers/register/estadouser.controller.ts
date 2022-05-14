import { Request, Response } from "express";

export const createEstadoUser = (req: Request, res: Response) => {
    console.log(req.body);
    res.send('Creando Estado usuario');
}

export const updateEstadoUser = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando Estado usuario');
}

export const deleteEstadoUser = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Estado usuario borrado');
}