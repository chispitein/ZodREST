import { Request, Response } from "express";
import { connect } from "../database";

//Obtener todos los datos de la tabla, el request no es ocupado, revisar si se puede sacar
export const getAllTabla =
  (tabla: string) => async (req: Request, res: Response) => {
    try {
      const conn = await connect();
      try {
        const result = await conn.query("select * from " + tabla);
        return res.json(result[0]);
      } catch (error) {
        return res.status(500).json({
          Message: "Problemas con el servidor SQL (2)",
          Evento: error,
        });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ Message: "Problemas al conectarse a la DB", Evento: error });
    }
  };

//Obtener los datos filtrados a traves del request query, pueden ser muchos query en simultaneo
export const getFilterTabla =
  (tabla: string) =>
  async (req: Request, res: Response): Promise<Response> => {
    try {
      const conn = await connect();
      try {
        let count = Object.keys(req.query).length;
        let cuenta = 0;
        let sqlstring = "select * from " + tabla + " where ";
        for (let i in req.query) {
          sqlstring =
            sqlstring +
            i +
            " LIKE " +
            "'%" +
            Object.values(req.query)[cuenta] +
            "%' ";
          if (cuenta < count - 1) {
            sqlstring = sqlstring + "and ";
          }
          cuenta++;
        }
        console.log(sqlstring);
        const result = await conn.query(sqlstring);
        return res.json(result[0]);
      } catch (err) {
        return res
          .status(500)
          .json({ Message: "Problemas con el servidor SQL (2)", Evento: err });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ Message: "Problemas al conectarse a la DB", Evento: error });
    }
  };

//Elimina una fila SOLO EN CASO DE SER NECESARIO, en los otros casos se dará de baja el producto o user
export const deleteRow =
  (tabla: string) => async (req: Request, res: Response) => {
    try {
      const conn = await connect();
      try {
        const result = await conn.query(
          "delete from " + tabla + " where ?",
          req.params
        );
        return res.json({ FilasAfectadas: Object.values(result[0])[1] });
      } catch (err) {
        return res
          .status(500)
          .json({ Message: "Problemas con el servidor SQL (2)", Evento: err });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ Message: "Problemas al conectarse a la DB", Evento: error });
    }
  };

//Inserta un registro en la tabla y muestra si fue afectada o no
export const InsertRow =
  (tabla: string) => async (req: Request, res: Response) => {
    try {
      const conn = await connect();
      try {
        const resultado = await conn.query(
          "INSERT INTO " + tabla + " SET ?  ",
          req.body
        );
        return res.json({ FilasAfectadas: Object.values(resultado[0])[1] });
      } catch (error) {
        return res.status(500).json({
          Message: "Problemas con el servidor SQL (2)",
          Evento: error,
        });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ Message: "Problemas al conectarse a la DB", Evento: error });
    }
  };

//Actualiza datos de la tabla mediante el req body para los registros y el req params para saber el id
export const UpdateRow =
  (tabla: string) => async (req: Request, res: Response) => {
    try {
      const conn = await connect();
      try {
        const result = await conn.query("update " + tabla + " set ? where ?", [
          req.body,
          req.params,
        ]);
        return res.json({
          FilasAfectadas: Object.values(result[0])[1],
          Parametros: req.body,
        });
      } catch (err) {
        return res
          .status(500)
          .json({ Message: "Problemas con el servidor SQL (2)", Evento: err });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ Message: "Problemas al conectarse a la DB", Evento: error });
    }
  };

//Obtener todos los datos de la tabla, el request no es ocupado, revisar si se puede sacar
export const getInnerTablas = () => async (req: Request, res: Response) => {
  try {
    const conn = await connect();
    try {
      const result = await conn.query(
        "select productos.idProdCodigo, productos.NombreProd ,productos.NombreProd, productos.Cantidad, tipoproducto.TipoProducto,historial.PrecioCompra ,historial.PrecioVenta, historial.PorGanancia, unidadmedidas.Unidad from productos join historial on historial.idProdCodigo = productos.idProdCodigo JOIN tipoproducto on productos.idTipoProducto = tipoproducto.idTipoProducto JOIN unidadmedidas on unidadmedidas.idUnidadMedida = productos.idUnidadMedida;"
      );
      return await res.json(result[0]);
    } catch (error) {
      return res
        .status(500)
        .json({ Message: "Problemas con el servidor SQL (2)", Evento: error });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Problemas al conectarse a la DB", Evento: error });
  }
};

export const getoneInnerTables = () => async (req: Request, res: Response) => {
  try {
    console.log("request: " + JSON.stringify(req.params));
    const conn = await connect();
    try {
      const result = await conn.query(
        "select productos.idProdCodigo, productos.NombreProd ,productos.NombreProd, productos.Cantidad, tipoproducto.TipoProducto,historial.PrecioCompra ,historial.PrecioVenta, historial.PorGanancia, unidadmedidas.Unidad from productos join historial on historial.idProdCodigo = productos.idProdCodigo JOIN tipoproducto on productos.idTipoProducto = tipoproducto.idTipoProducto JOIN unidadmedidas on unidadmedidas.idUnidadMedida = productos.idUnidadMedida WHERE productos.idProdCodigo=" +
          "?",
        req.params
      );
      return await res.json(result[0]);
    } catch (error) {
      return res.status(500).json({
        Message: "Problemas con el servidor SQL (2)",
        Evento: error,
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Problemas al conectarse a la DB", Evento: error });
  }
};
