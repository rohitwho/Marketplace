const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const {engine}= require("express-handlebars")



const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`server running on localhost:${PORT}!`);
  });
});
