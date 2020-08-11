
//index
exports.index = (req, res) =>{
    res.render('barang/index')
}

//edit
exports.store = (req, res) =>{
    res.render('barang/index',{
       nama : req.body.nama,
       alamat :req.body.alamat
    })
}

//edit
exports.edit = (req, res) =>{
    res.render('barang/edit',{
        id: req.params.id
    })
}