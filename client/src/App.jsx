import React  from 'react'
import './App.css'
import Mesa1 from './pages/home/Mesa1'
import Mesa2 from './pages/home/Mesa2'
import Mesa3 from './pages/home/Mesa3'
import Cozinha from './pages/cozinha/Cozinha'
import Caixa from './pages/caixa/Caixa'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
function App() {

 return(<> 
 <BrowserRouter>
 <div className='navbar'>
 <Link className='link-navbar' to={'/mesa1'}><button>mesa 1</button></Link>
 <Link className='link-navbar' to={'/mesa2'}><button>mesa 2</button></Link>
 <Link className='link-navbar' to={'/mesa3'}><button>mesa 3</button></Link>
 <Link className='link-navbar' to={'/cozinha'}><button>Cozinha</button></Link>
 <Link className='link-navbar' to={'/caixa'}><button>Caixa</button></Link>
 </div>
  <Routes>
    <Route path='/mesa1' element={< Mesa1/>}></Route>
    <Route path='/mesa2' element={< Mesa2/>}></Route>
    <Route path='/mesa3' element={< Mesa3/>}></Route>
    <Route path='/Caixa' element={< Caixa/>}></Route>
    <Route path='/Cozinha' element={< Cozinha/>}></Route>
    
  </Routes>
 </BrowserRouter>
  
  </>)
}

export default App
