import { Router } from "express";
import { createUser, deleteUser, updateUser } from "../../controllers/register/register.controller";
import { schemaValidation } from "../../middlewares/schemaValidator.middleware";
import { deleteUserSchema, registerUserSchema, updateUserSchema } from "../../schemas/Register/register.schema";

const router = Router();

router.post('/register', schemaValidation(registerUserSchema) ,createUser );
router.put('/register/:id', schemaValidation(updateUserSchema) ,updateUser );
router.delete('/register/:id', schemaValidation(deleteUserSchema) ,deleteUser );

export default router;