const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes");
// const apiRoutes = require("./routes/api")

// Define middleware here
app.use(logger("dev"));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pupstop",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("[+] Succesfully connected to database.");
  }
);

// Use apiRoutes
app.use("/api", apiRoutes);
// app.use(apiRoutes)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}!`);
});
