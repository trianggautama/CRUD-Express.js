const express    = require("express")
const app        = express()
const path       = require('path')
const bodyParser = require('body-parser')
const hbs        = require('express-handlebars')
const port       = 3000



//setting view template
app.set('views', path.join(__dirname,'App/views'))

app.engine('hbs', hbs({
    extname: '.hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/App/views/layouts',
    partialsDir: __dirname + '/App/views/partials/'
}));

app.set('view engine', 'hbs');




//setup body parser
app.use(bodyParser.urlencoded({ 
    extended:true 
}))

app.use(bodyParser.json()); //And so on.

// routing
require('./App/routes/index')(app)
require('./App/routes/barang')(app)
require('./App/routes/auth')(app)



app.listen(port,()=>{
    console.log(`server berjalan di port ${port}`)
})

