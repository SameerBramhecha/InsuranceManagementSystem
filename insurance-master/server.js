

var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');


var path       =require("path")
var  app = express();
var  router = express.Router();
var  config = require('./app/config/config.js');
const  sql = require('mssql');
app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());

app.set('views',path.join(__dirname,'templates/insurance'));
// app.set('views',path.join(__dirname,'templates/customer'));;
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/static'));
  

require("./app/routes/routes")(app);

var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);