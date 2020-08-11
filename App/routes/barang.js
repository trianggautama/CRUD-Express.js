module.exports = app => {
    const controller = require('../controller/barang.controller')

    app.get("/barang/", controller.index)

    app.post("/barang/", controller.store)

    app.get("/barang/edit/:id", controller.edit)

}