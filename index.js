import express from "express";
import path from "path";
import addRouter from "./routes/add.route.js";

const PORT = 8000;

const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({ extended: false }));

app.use("/add", addRouter);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
