import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import {
  InsertRow,
  getAllTabla,
  getFilterTabla,
  deleteRow,
  UpdateRow,
} from "../../middlewares/get.middleware";
import {
  postBoletaSchema,
  updateBoletaSchema,
  deleteBoletaSchema,
} from "../../schemas/Ventas/boletas.schema";
import { getLastID } from "../../controllers/Ventas/boletas.controller";

const router = Router();

router.get("/boletas/search", getFilterTabla("boletas"));
router.get("/boletas/", getAllTabla("boletas"));
router.post(
  "/boletas",
  schemaValidation(postBoletaSchema),
  InsertRow("boletas")
);
router.put(
  "/boletas/:idBoleta",
  schemaValidation(updateBoletaSchema),
  UpdateRow("boletas")
);
router.delete(
  "/boletas/:idBoleta",
  schemaValidation(deleteBoletaSchema),
  deleteRow("boletas")
);
router.get("/boletas/lastid", getLastID);

export default router;
