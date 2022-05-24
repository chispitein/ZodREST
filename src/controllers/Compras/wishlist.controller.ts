import { Request, Response } from "express";

export const createWishList = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Creando WishList');
}

export const updateWishList = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando WishList');
}

export const deleteWishList = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Provedor WishList');
}