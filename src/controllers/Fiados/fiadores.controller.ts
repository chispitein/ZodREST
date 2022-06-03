import { Request, Response } from "express";
import { connect } from "../../database";
import { AnyZodObject} from "zod";
import parsequery from 'query-string'

export const createFiadores = async (req: Request, res: Response) => {
    const query :AnyZodObject = req.body
    const conn = await connect();
    await conn.query('INSERT INTO boletas SET ?', [query]);
}

export async function getbyidFiador(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    let count = Object.keys(req.query).length;
    let cuenta = 0;
    let sqlstring = 'select * from boletas where '
    for (let i in req.query){
        sqlstring = sqlstring + i + ' = ' + "'" +Object.values(req.query)[cuenta] + "' "
        if (cuenta < count-1) {
            sqlstring = sqlstring + 'and '        
        }
        cuenta++;
    }
    console.log(sqlstring)
    const result = await conn.query(sqlstring);
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