const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 9000;

//CORS
app.use(cors({ credentials: true, origin: true }));

app.use("/", require("./controllers/api/routes"));

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
