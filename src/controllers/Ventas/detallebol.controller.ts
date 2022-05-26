import { Request, Response } from "express";
import {connect} from "../../database";
import { AnyZodObject, ZodError } from "zod";

export async function createDetBoletas(req: Request, res: Response){
    const pregunta :AnyZodObject = req.body
    const conn = await connect();
    const resultado = conn.query('INSERT INTO detalleboletas SET ?', [pregunta]);
    res.send('Creando Det Boletas');
}

export const updateDetBoletas = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando Det Boletas');
}

export const deleteDetBoletas = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('det Det Boletas');
}