const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");

const app = express();

// connect Database

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(morgan("dev"));

app.get("/", (req, res) =>
  res.json({ msg: " Welcome to  the ContactKeeper Api...." })
);
// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
