import express from "express";

const router = express.Router();
import Controller from "./controller";

console.log("ROUTESSS ");

router.post("/sign-up", Controller.signUp);

export default router;
