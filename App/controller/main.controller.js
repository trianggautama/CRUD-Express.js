
//index
exports.index = (req, res) =>{
    res.render('index')
}

//edit
exports.store = (req, res) =>{
    res.render('index',{
       nama : req.body.nama,
       alamat :req.body.alamat
    })
}

//edit
exports.edit = (req, res) =>{
    res.render('edit',{
        id: req.params.id
    })
}