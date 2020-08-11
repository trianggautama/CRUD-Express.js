module.exports = app => {
    const controller = require('../controller/login.controller')

    app.get("/login/", controller.index)
}