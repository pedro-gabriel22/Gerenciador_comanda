import React  from 'react'
import './App.css'
import Mesas from './pages/home/Mesas'
import Cozinha from './pages/cozinha/Cozinha'
import Caixa from './pages/caixa/Caixa'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

function App() {

 return(<> 
 
 <BrowserRouter>
 <div className='container_pai'>
 <div className='sidebar'>
   <p className='comands'>Comands</p>
   <ul className='list_sidebar'>
  <li className='item_sidebar'><Link className='link-navbar' to={'/mesas'}><button>mesas</button></Link> </li> 
 <li className='item_sidebar'><Link className='link-navbar' to={'/caixa'}><button>Caixa</button></Link></li>
 <li className='item_sidebar'><Link className='link-navbar' to={'/cozinha'}><button>Comandas</button></Link></li>
 
 
   </ul>
 </div>
 </div>
  <Routes>
     <Route path='/mesas' element={< Mesas/>}></Route> 
    <Route path='/Caixa' element={< Caixa/>}></Route>
    <Route path='/Cozinha' element={< Cozinha/>}></Route>
    
  </Routes>
 </BrowserRouter>
  
  </>)
}

export default App
