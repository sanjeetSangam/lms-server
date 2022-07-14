const mongoose = require("mongoose");

const server = () => {
  mongoose.connect(process.env.DB_LINK);
  console.log("DB connected");
};

module.exports = server;
