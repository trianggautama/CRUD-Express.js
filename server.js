const express    = require("express")
const app        = express()
const path       = require('path')
const bodyParser = require('body-parser')
const port       = 3000



//setting view template
app.set('views', path.join(__dirname,'App/views'))
app.set('view engine', 'hbs')

//setup body parser
app.use(bodyParser.urlencoded({ 
    extended:true 
}))

app.use(bodyParser.json()); //And so on.

// routing
require("./app/routes/")(app);

app.listen(port,()=>{
    console.log(`server berjalan di port ${port}`)
})

