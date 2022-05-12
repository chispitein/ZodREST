import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
    console.log(req.body);
    res.send('Creando usuario');
}

export const updateUser = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando usuario');
}

export const deleteUser = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('usuario borrado');
}

