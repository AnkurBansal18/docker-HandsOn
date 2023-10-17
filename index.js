const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({
    message: "hello moto",
  });
});
app.listen(3001, () => {
  console.log("server started on port 3001 🚀");
});
