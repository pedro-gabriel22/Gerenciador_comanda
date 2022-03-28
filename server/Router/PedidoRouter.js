const express = require('express')
const router = express()

const pedidoContrller = require('../Controller/PedidoController')

router.get('/all',pedidoContrller.allpedidos)

router.post('/insert', pedidoContrller.addPedido)

module.exports = router