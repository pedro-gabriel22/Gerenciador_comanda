import React  from "react";
import Mesa1 from "./Mesa1";
import Mesa2 from "./Mesa2";
import Mesa3 from "./Mesa3";
import Modal_Component from '../caixa/Modal_Component'
import { ModalProvider } from "../caixa/Modal_context";
import Mod from "./Mod";

const Mesas = () =>{


  
    return(
        <>
         <ModalProvider>
             <div className="grid_mesas">
               <Mesa1 className="grid_mesa1" /> 
               {/* <Mod></Mod>  */}
             <Mesa2 className="grid_mesa2" />
             <Mesa3 className="grid_mesa3" />
             </div>
            
        <Modal_Component/>
        </ModalProvider>

    
    
    
        </>
    )
}
export default Mesas