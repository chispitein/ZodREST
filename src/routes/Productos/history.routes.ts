import { Router } from "express";
import { createHistory, updateHistory, deleteHistory } from "../../controllers/Productos/history.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { registerHistorySchema, updateHistorySchema, deleteHistorySchema } from "../../schemas/Productos/history.schema";

const router = Router();

router.post('/history', schemaValidation(registerHistorySchema) ,createHistory );
router.put('/history/:id', schemaValidation(updateHistorySchema) ,updateHistory );
router.delete('/history/:id', schemaValidation(deleteHistorySchema) ,deleteHistory );

export default router;