import React from "react";
import {Modal as ModalComponent} from 'antd'
import { useModalContext } from './Modal_context'
const Modal_Component = () =>{
    const {modalState:{message, visible}, closeModal} = useModalContext()
    return(<>
        <ModalComponent onCancel={closeModal} onOk={closeModal} visible={visible}>
        
        <p>{message}</p>

        </ModalComponent>
    </>)
}
export default Modal_Component