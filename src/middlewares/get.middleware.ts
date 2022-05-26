import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodPromise } from "zod";
import { connect } from "../database";

export async function getFilterTabla(req: Request, res: Response, tabla: string){
    const datain: AnyZodObject = req.body;
    const conn = await connect();
    const result = await conn.query('select * from ' + tabla + ' where ? ', [datain]);
    res.json(result)
}

export const getAllTabla = (tabla: string) =>
    async (req: Request, res: Response, next: NextFunction) => {
        const conn = await connect();
        const result = await conn.query('select * from ' + tabla);
        return res.json(result[0]);
    }



export const InsertRow = (tabla: string) =>
    async (req: Request, res: Response, next: NextFunction) => {
        const datain: AnyZodObject = req.body;
        const conn = await connect();
        const resultado = conn.query("INSERT INTO " + tabla + " SET ?  ", [datain]);
        res.send('Los datos ' + [datain] + ' Fueron Insertados en la tabla ' + tabla + '');
        next()
    }