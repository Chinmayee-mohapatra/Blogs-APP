const mongoose = require("mongoose");

require("dotenv").config();

const databaseConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(console.log("Successfully connected to database"))
    .catch((err) => {
      console.log("Error while connecting to database: ", err.message);
      process.exit(1);
    });
};

module.exports = databaseConnect;
