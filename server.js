const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;

app.use("/", require("./controllers/api/routes"));

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
