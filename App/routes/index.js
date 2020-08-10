  
module.exports = app => {
    const controller = require('../controller/main.controller')

    app.get("/", controller.index)

    app.post("/", controller.store)

    app.get("/edit/:id", controller.edit)


}