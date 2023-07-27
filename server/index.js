const express = require("express");
const { connection } = require("./configs/db");
const { userRoute } = require("./routes/user-route");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoute);

app.get("/", (req, res) => {
  try {
    res.status(200).send({ msg: "Welcome" });
  } catch (error) {
    res.status(400).send({ msg: err });
  }
});
app.listen(process.env.PORT, async () => {
  await connection;
  console.log(`Server is running on Port No ${process.env.PORT}`);
});
