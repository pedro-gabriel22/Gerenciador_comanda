import React from "react";
import HomePage1 from "./HomePage1";
import HomePage2 from "./HomePage2";
import HomePage3 from "./HomePage3";
import Modal_Component from './Modal_Component'
import {ModalProvider} from './Modal_context'
const Caixa = () =>{
    return(
        <ModalProvider>
        <HomePage1/>
        <HomePage2/>
        <HomePage3/>
        <Modal_Component/>
    
        </ModalProvider>
    
    
    )
}

export default Caixa