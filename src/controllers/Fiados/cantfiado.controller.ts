import { Request, Response } from "express";
import { connect } from "../../database";
import { AnyZodObject, ZodError } from "zod";

export async function getCantFiado(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const result = await conn.query('select * from cantidadfiado');
    return res.json(result[0]);
}

export async function createCantFiado(req: Request, res: Response) {
    const query :AnyZodObject = req.body
    const conn = await connect();
    await conn.query('INSERT INTO cantidadfiado SET ?', [query]);
}

export const updateCantFiado = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando CantFiado');
}

export const deleteCantFiado = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('det CantFiado');
}