const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// route
const blog = require("./routes/blog");
// mounting to route
app.use("/api/v1", blog);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT} successfully`);
});

const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Home page baby</h1>`);
});
