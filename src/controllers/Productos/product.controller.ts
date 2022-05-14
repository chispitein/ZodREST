import { Request, Response } from "express";

export const createproduct = (req: Request, res: Response) => {
    console.log(req.body);
    res.send('creating product');
}

export const updateproduct = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('updating product');
}

export const deleteProduct = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Producto borrado');
}

