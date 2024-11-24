import { Router } from "express";
import { GetUserInfoController } from "../controllers/GetUserInfoController";
import { ListCategoriesController } from "../controllers/ListCategoriesController";
import { SignInController } from "../controllers/SignInController";
import { SignUpController } from "../controllers/SignUpController";
import { AuthenticationMiddleware } from "../middlewares/AuthenticationMiddleware";

const router = Router();

// auth
router.post("/sign-up", SignUpController);
router.post("/sign-in", SignInController);

router.get("/categories", ListCategoriesController);

router.get("/user/me", AuthenticationMiddleware, GetUserInfoController);

export { router };
