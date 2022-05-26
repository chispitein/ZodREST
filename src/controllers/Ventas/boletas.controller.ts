import { Request, Response } from "express";
import {connect} from "../../database";
import { AnyZodObject, ZodError } from "zod";

export async function createBoletas(req: Request, res: Response){
    const pregunta :AnyZodObject = req.body
    const conn = await connect();
    const resultado = conn.query('INSERT INTO boletas SET ?', [pregunta]);
    res.send('Creando Boletas');
}

export const updateBoletas = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Actualizando Boletas');
}

export const deleteBoletas = (req: Request, res: Response) => {
    console.log(req.body);
    console.log(req.params)
    res.send('det Boletas');
}