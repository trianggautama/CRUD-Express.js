//index
exports.index = (req, res) =>{
    res.render('auth/login',{
        layout: 'main'  
    })
}