import React, {useState, useContext, createContext} from "react";

const modalContext = createContext({})

const ModalProvider = ({children}) =>{

    const [modalState, setModalState] = useState({visible:false})

    const openModal = (payload) => setModalState({...payload, visible:true})
    const closeModal = () => setModalState({visible:false})

    return <modalContext.Provider value={{
        modalState, openModal, closeModal
    }}>
        {children}
    </modalContext.Provider>
}

const useModalContext = () =>{
    const context = useContext(modalContext)
    return context
}
export {useModalContext, ModalProvider}