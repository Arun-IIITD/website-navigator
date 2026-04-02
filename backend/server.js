const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();


const uploadRoute = require("./routes/upload"); // for routes related to file upload


app.use(cors());//for allowing the frontend to access the backend without any issues of CORS policy
app.use(express.json()); //for converting the object to json from frontend


app.use("/api", uploadRoute);


app.get("/", (req, res) => {
  res.send("Hello Worlddd!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


