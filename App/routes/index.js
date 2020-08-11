  
module.exports = app => {
    const controller = require('../controller/main.controller')
    app.get("/", controller.index)
}