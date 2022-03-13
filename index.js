const express= require('express')
var exphbs  = require('express-handlebars');

const path= require('path')
const app= express()
const port= 3000;

var hbs = exphbs.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/', require(path.join(__dirname, 'routes/routes.js')))

app.listen(port, ()=>{
    console.log(`App  is listening on Port http://localhost:${port}`)
})