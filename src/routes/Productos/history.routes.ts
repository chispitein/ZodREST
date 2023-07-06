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
  postHistorySchema,
  updateHistorySchema,
  deleteHistorySchema,
} from "../../schemas/Productos/history.schema";

const router = Router();

router.get("/historial/search", getFilterTabla("historial"));
router.get("/historial/", getAllTabla("historial"));
router.post(
  "/historial",
  schemaValidation(postHistorySchema),
  InsertRow("historial")
);
router.put(
  "/historial/:idHistorial",
  schemaValidation(updateHistorySchema),
  UpdateRow("historial")
);
router.delete(
  "/historial/:idHistorial",
  schemaValidation(deleteHistorySchema),
  deleteRow("historial")
);

export default router;
