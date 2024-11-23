import { Router } from "express";
import { SignInController } from "../controllers/SignInController";
import { SignUpController } from "../controllers/SignUpController";

const router = Router();

// auth
router.post("/sign-up", SignUpController);
router.post("/sign-in", SignInController);

export { router };