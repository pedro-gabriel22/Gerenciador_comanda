import React from "react";
import {Modal as ModalComponent} from 'antd'
import { useModalContext } from './Modal_context'
const Modal_Component = () =>{
    const {modalState:{message, visible}, closeModal} = useModalContext()
    return(<>
        <ModalComponent onCancel={closeModal} onOk={closeModal} visible={visible}>
        <div className="modal_title">
            <div className="modal_item">
            <h2>Prato</h2>
            <h2>quantidade</h2>
            <h2>adicional</h2>
            <h2>preço</h2>
            </div>
        </div>
        <p>{message}</p>

        </ModalComponent>
    </>)
}
export default Modal_Component