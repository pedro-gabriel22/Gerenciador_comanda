import React, {useEffect,useState} from "react";
import Axios from "axios";


const Cozinha = () =>{
    const [list, setList] = useState([])

    
useEffect(()=>{
    Axios.get('http://localhost:3001/all').then(response =>{
      setList(response.data)
      
    })
  },[])
  const pedidomesa1 = list.filter(list =>list.numeroMesa === 1)
  
    return(<>
    <div className="all_container">
    <div className='all'>{list.map((val,key) =>{
      return(
        <div className='all_pedido' key={key}>
          <p className="c1">{val.numeroMesa }</p>
          <p className="c2">{val.prato}</p>
          <p className="c3">{val.quantidade }</p>
          <p className="c4">{val.descricao }</p>
          <p className="c5">{val.adicional}</p>
          
        </div>
      )
    })}</div>
    </div>
    </>)
}

export default Cozinha