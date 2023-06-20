import questions from "../models/questions.js";
import mongoose from "mongoose";
export const AskQuestions = async (req, res) => {
  const postQuestionD = req.body;
  const postQuestion = new questions({ ...postQuestionD, userId: req.userId });
  try {
    await postQuestion.save();
    res.status(200).json("Sucess");
  } catch (err) {
    res.status.json("Couldn't post a question");
  }
};

export const getAllQuestions = async (req, res) => {
  try {
    const questionList = await questions.find();
    res.status(200).json(questionList);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
