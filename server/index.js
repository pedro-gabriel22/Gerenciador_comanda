const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const PedidoRouter = require('./Router/PedidoRouter')

mongoose.connect('mongodb://localhost/sistema_pizzaria')
const db = mongoose.connection
db.on('error', (req,res)=>{console.log('banco deu ruim')})
db.once('open',(req,res)=>{console.log('banco deu bom')})


app.use('/', PedidoRouter)
app.listen('3001', console.log('servidor rodando'))