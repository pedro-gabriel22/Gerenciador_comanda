const mongoose = require('mongoose')

const PedidoSchema = new mongoose.Schema({
    prato:{type:String, required:true},
    quantidade:{type:Number, required:true},
    descricao:String,
    adicional:String,
    numeroMesa:{type:Number, required:true}
})
const Pedi = mongoose.model('Pedido',PedidoSchema)
module.exports = Pedi