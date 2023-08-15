const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/contactdata", require("./routes/portfolioRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));


app.use(errorHandler);

app.listen(port, () => {
  console.log("Server started on", { port });
});
