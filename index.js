const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.json({
    message: "hello moto",
  });
});
app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT} 🚀`);
});
