const express = require("express");
const app = express();
const PORT = 9000 || process.env.PORT;

app.use("/", require("./controllers/api/routes"));

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});