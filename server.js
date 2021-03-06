const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.port||3000;

//http.createServer(onRequest).listen(process.env.PORT || 4000)

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// routes
app.use(require("./routes/api.js"));

//var MONGODB_URI = process.env.MONGODB_URI || "mongodb://budget:Welcome123!@ds045907.mlab.com:45907/heroku_wlk5hfmj";

mongoose.connect(process.env.MONGODB_URI || "mongodb://budget:Welcome123!@ds045907.mlab.com:45907/heroku_wlk5hfmj",
{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


/*mongoose.connect("mongodb://budget:Welcome123!@ds045907.mlab.com:45907/heroku_wlk5hfmj", {
  useNewUrlParser: true,
  useFindAndModify: false
}); 

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});*/

/*app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});*/

app.listen(process.env.PORT, '0.0.0.0')