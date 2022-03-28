
const express = require('express')
const Pedi = require('../Model/Pedido')

const addPedido = async (req,res)=>{
    
        const campoPrato = req.body.campoPrato
        const campoQuantidade = req.body.campoQuantidade
        const campoDescricao = req.body.campoDescricao
        const campoAdicional = req.body.campoAdicional
        const numMesa = req.body.numMesa
    
        const pedi = new Pedi({
            prato:campoPrato,
            quantidade:campoQuantidade,
            descricao:campoDescricao,
            adicional:campoAdicional,
            numeroMesa:numMesa
        }) 
    
        try {
            await pedi.save()
        } catch (error) {
            console.log(error);
        }
    }

    const allpedidos = async (req,res)=>{
        Pedi.find({},(err,result)=>{
            if(err){
                res.send(err)
            }
            res.send(result)
        })
    }

    module.exports = {addPedido,allpedidos}