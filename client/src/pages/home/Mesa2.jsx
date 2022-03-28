import React ,{ useEffect, useState } from "react";
import Axios from 'axios'

const Mesa2 = () =>{

      
  const [campoPrato,setCampoPrato] = useState('')
  const [campoQuantidade,setCampoQuantidade] = useState(0)
  const [campoDescricao,setCampoDescricao] = useState('')
  const [campoAdicional,setCampoAdicional] = useState('')
  const [numMesa,setNumMesa] = useState(2)
  const [list, setList] = useState([])
 
const addPedido = () =>{
  Axios.post('http://localhost:3001/insert',{
    campoPrato:campoPrato,
    campoQuantidade:campoQuantidade,
    campoDescricao:campoDescricao,
    campoAdicional:campoAdicional,
    numMesa:numMesa
  })
  
  addEventListener('click' , ()=>{
    location.reload()
  })
}

useEffect(()=>{
  Axios.get('http://localhost:3001/all').then(response =>{
    setList(response.data)
    
  })
},[])
const pedidomesa2 = list.filter(list =>list.numeroMesa === 2)


    return(
        <>
        
<div className='container'>
    <div className='form'>
      <input 
      className="inp1"
      tipe='text'
      placeholder='prato' 
      onChange={(event) =>{setCampoPrato(event.target.value)}}
      />
      <input 
      className="inp2"
      tipe='number'
      placeholder='Quantidade' 
      onChange={(event) =>{setCampoQuantidade(event.target.value)}}
      />
      <input 
      className="inp3"
      tipe='text'
      placeholder='Descricao' 
      onChange={(event) =>{setCampoDescricao(event.target.value)}}
      />
      <input 
      className="inp4"
      tipe='text'
      placeholder='Adicional' 
      onChange={(event) =>{setCampoAdicional(event.target.value)}}
      />
      
      <button className="btn"   onClick={()=>{addPedido()}} >enviar</button>
      
    </div>
    <div className="texto">
      <div className="texto-item">
    <p className="b1">Num mesa</p>
    <p className="b2">prato</p>
    <p className="b3">quantidade</p>
    <p className="b4">descrição</p>
    <p className="b5">Adicional</p>
    </div>
    </div>
    <div className="pedido"> 
    
        {pedidomesa2.map((val,key)=>{
          return(<div className="produto-item" key={key}>
            <p className="p1">{val.numeroMesa }</p>
          <p className="p2">{val.prato}</p>
          <p className="p3">{val.quantidade }</p>
          <p className="p4">{val.descricao }</p>
          <p className="p5">{val.adicional}</p>
          </div>)
        })}
      </div>
    </div>
     

        </>
    )
}
export default Mesa2