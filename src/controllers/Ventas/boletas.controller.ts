import { Request, Response } from "express";
import { connect } from "../../database";
import { AnyZodObject, ZodError } from "zod";

export async function getBoletas(
  req: Request,
  res: Response
): Promise<Response> {
  const conn = await connect();
  const result = await conn.query("select * from boletas");
  return res.json(result[0]);
}

export async function getLastID(req: Request, res: Response) {
  const conn = await connect();
  const result = await conn.query("select LAST_INSERT_ID()");
  return res.json(result[0]);
}

export async function createBoletas(req: Request, res: Response) {
  const pregunta: AnyZodObject = req.body;
  const conn = await connect();
  const resultado = conn.query("INSERT INTO boletas SET ? ", [pregunta]);
  res.send("Creando Boletas");
}

export const updateBoletas = (req: Request, res: Response) => {
  console.log(req.body);
  console.log(req.params);
  res.send("Actualizando Boletas");
};

export const deleteBoletas = (req: Request, res: Response) => {
  console.log(req.body);
  console.log(req.params);
  res.send("det Boletas");
};
