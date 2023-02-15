import bodyParser from "body-parser";
import express from "express";
import UsersRoutes from "./routes/users.js";

const app = express();

const PORT = 5000;

app.use(bodyParser.json());
app.use("/users", UsersRoutes);

app.get("/", (req, res) => {
  res.send("home page is here");
});

app.listen(PORT, () => console.log("server is running"));
