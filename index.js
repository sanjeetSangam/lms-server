// imports
const express = require("express");
const cors = require("cors");
const server = require("./src/config/db");
require("dotenv").config();
const lectureRoute = require("./src/routes/lectureRoutes");

// middlewares
const app = express();
app.use(express.json());
app.use(cors());

// routes
app.use("/api", lectureRoute);

// port
const PORT = process.env.PORT || 5000;

// server started
app.listen(PORT, async () => {
  try {
    await server();
    console.log(`Server has started on PORT: ${PORT}`);
  } catch (err) {
    console.log(err.message);
  }
});
