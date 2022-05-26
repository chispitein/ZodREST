import { Request, Response } from "express";
import { connect } from "../../database";
import { AnyZodObject, ZodError } from "zod";

export const createFiadores = async (req: Request, res: Response) => {
    const query :AnyZodObject = req.body
    const conn = await connect();
    await conn.query('INSERT INTO boletas SET ?', [query]);
}

export async function getbyidFiador(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const id = req.params.id
    console.log(id)
    const result = await conn.query('select * from fiadores where ?', req.params);
    return res.json(result[0]);
}



export const updateFiadores = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando Fiadores');
}

export const deleteFiadores = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('det Fiadores');
}