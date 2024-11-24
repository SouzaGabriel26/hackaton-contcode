import { Router } from "express";
import { GetBudgetByIdController } from "../controllers/GetBudgetByIdController";
import { GetUserInfoController } from "../controllers/GetUserInfoController";
import { ListBudgetsController } from "../controllers/ListBudgetsController";
import { ListCategoriesController } from "../controllers/ListCategoriesController";
import { PostBudgetController } from "../controllers/PostBudgetController";
import { SignInController } from "../controllers/SignInController";
import { SignUpController } from "../controllers/SignUpController";
import { AuthenticationMiddleware } from "../middlewares/AuthenticationMiddleware";

const router = Router();

// auth
router.post("/sign-up", SignUpController);
router.post("/sign-in", SignInController);

router.get("/categories", ListCategoriesController);
router.get("/user/me", AuthenticationMiddleware, GetUserInfoController);

// budgets
router.post("/budget", AuthenticationMiddleware, PostBudgetController);
router.get("/budgets", AuthenticationMiddleware, ListBudgetsController);
router.get("/budgets/:id", AuthenticationMiddleware, GetBudgetByIdController);

export { router };
