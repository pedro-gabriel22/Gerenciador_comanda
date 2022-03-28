import React, {useEffect,useState} from "react";
import { useModalContext } from './Modal_context'
import Axios from "axios";
const HomePage2 = () =>{

    const [list, setList] = useState([])

    
useEffect(()=>{
    Axios.get('http://localhost:3001/all').then(response =>{
      setList(response.data)
      
    })
  },[])
  const pedidomesa2 = list.filter(list =>list.numeroMesa === 2)
   

    const {openModal} = useModalContext()
    const abrirModal = () =>{openModal({message:
        <div>
        {pedidomesa2.map((val,key)=>{
          if(val.prato === 'pizza'){
            var valor = 10

          } else if(val.prato === 'lasanha'){
            valor = 13
          }else{
            valor = 8
          }
          return(
            <div>
          
            <div  className="caixa_item" key={key}>
            
            <p className="c2">{val.prato}</p>
            <p className="c3">{val.quantidade }</p>
            
            <p className="c5">{val.adicional}</p>
            <p >{valor}</p>
            </div>
            </div>
          )
        })}
      </div>
    })}
    return(<>
    <div>
    
        <button className="mesa_caixa" onClick={abrirModal}>mesa 2</button>
    </div>

    
    
    </>)
}

export default HomePage2