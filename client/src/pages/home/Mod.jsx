// import logo from './logo.svg';
import React,{useState} from 'react';
// import './App.css';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import Axios from 'axios'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
     width: '600px',
     height: '300px',
     bgcolor:'background.red',
     border: '2px solid #000',

   
  },
};
function Mod() {


  const [campoPrato,setCampoPrato] = useState('')
  const [campoQuantidade,setCampoQuantidade] = useState(1)
  const [campoDescricao,setCampoDescricao] = useState('')
  const [campoAdicional,setCampoAdicional] = useState('')
  const [numMesa,setNumMesa] = useState(1)
 
  
  const [cormesa,setCorMesa] =useState(true)
const [testadorMesa, setTestadorMesa] = useState('stylemesa1')

const addPedido = () =>{
  Axios.post('http://localhost:3001/insert',{
    campoPrato:campoPrato,
    campoQuantidade:campoQuantidade,
    campoDescricao:campoDescricao,
    campoAdicional:campoAdicional,
    numMesa:numMesa
  })
 
  //  addEventListener('click' , ()=>{
  //     location.reload()
  //  }) 

   setCorMesa(false)
   setTestadorMesa ( cormesa ? 'stylemesa1' : 'stylemesa2')
}






  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='divpai'>
   
    <button className={testadorMesa} onClick={openModal}><p>mod</p></button>
    <Modal
    //  className='modalStyle'
      isOpen={modalIsOpen}
      
      onRequestClose={closeModal}
       style={customStyles}
      // contentLabel="Example Modal"
    >
     
   
     <div>

       
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
        placeholder='QTD' 
        onChange={(event) =>{setCampoQuantidade(event.target.value)}}
        />
        
        <input 
        className="inp4"
        tipe='text'
        placeholder='Adicional' 
        onChange={(event) =>{setCampoAdicional(event.target.value)}}
        />
        
        <button className="btn-enviar"   onClick={()=>{addPedido()}} >enviar</button>
        
        <button onClick={closeModal}>close</button>
      </div>

     </div>
     
    </Modal>
  </div>
  );
}

export default Mod;
