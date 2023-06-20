import express, { urlencoded } from "express";
import { mongoose } from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/questions.js";
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("hi");
});
app.use("/questions", questionRoutes);
app.use("/user", userRoutes);
const PORT = process.env.PORT || 2505;
const db_url =
  "mongodb+srv://admin:admin@clone.b6izfj9.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(db_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`app is running on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
