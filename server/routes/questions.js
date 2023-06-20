import express from "express";

import { AskQuestions, getAllQuestions } from "../controllers/questions.js";
const route = express.Router();
route.post("/Ask", AskQuestions);
route.get("/get", getAllQuestions);
export default route;
