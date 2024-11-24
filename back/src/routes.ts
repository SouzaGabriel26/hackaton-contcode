import { Router } from "express";
import { ListCategoriesController } from "../controllers/ListCategoriesController";
import { SignInController } from "../controllers/SignInController";
import { SignUpController } from "../controllers/SignUpController";

const router = Router();

// auth
router.post("/sign-up", SignUpController);
router.post("/sign-in", SignInController);

router.get("/categories", ListCategoriesController);

export { router };
