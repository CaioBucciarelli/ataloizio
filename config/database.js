//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userAT:userAT@cluster0.9prnz.mongodb.net/ataloizio')
}

//exportar as infomações para acesso externo
module.exports = conn 