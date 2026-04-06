const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, () => console.log("Server running on port 5000"));
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/records", require("./src/routes/recordRoutes"));
app.use("/api/dashboard", require("./src/routes/dashboardRoutes"));