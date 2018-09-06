const checkIfLoggedIn = require('./middleware/checkIfLoggedIn')
const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const massive = require("massive");
const session = require("express-session");
const app = express();
require("dotenv").config();

massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

app.use(express.static(__dirname + './../build'))


app.use(bodyParser.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

//endpoints
app.post('/api/register', controller.registerUser)
app.post('/api/login', controller.loginUser) 
app.get('/checkifloggedin', checkIfLoggedIn)
app.post('/api/addProperty', controller.addProperty)
app.get('/api/getProperties', controller.getProducts)
app.delete('/api/deleteProperty/:id', controller.deleteProperty)
app.post('api/logout', controller.logout)
app.get('/api/filter', controller.filterProperties)




const port = 8800;
app.listen(port, () => console.log("Listening on port " + port));
