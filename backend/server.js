const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const uploadRoute = require("./routes/upload"); 

app.use(cors());
app.use(express.json()); 

app.use("/api", uploadRoute);

app.get("/", (req, res) => {
  res.send("Hello Worlddd!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


