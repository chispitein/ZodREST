import { Router } from "express";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import {
  InsertRow,
  getAllTabla,
  getFilterTabla,
  deleteRow,
  UpdateRow,
  getInnerTablas,
  getoneInnerTables,
} from "../../middlewares/get.middleware";
import {
  postHistorySchema,
  updateHistorySchema,
  deleteHistorySchema,
} from "../../schemas/Productos/history.schema";

const router = Router();

router.get("/prodprecios", getInnerTablas());
router.get("/prodprecios/search", getoneInnerTables());

export default router;
