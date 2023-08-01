import { Dialog } from "primereact/dialog";
import React, { Children, isValidElement } from "react";
import { forwardRef, useState } from "react";

const Modal=forwardRef((props,ref)=>{

    const [visible,setVisible]=useState(false);

    const show=()=>{
        setVisible(true);
    }

    const hide=()=>{
        setVisible(false);
    }

    const hasModalFooter = () => {
        let hasFooter = false;
        Children.forEach(props.children, (child) => {
            if (isValidElement(child) && child.type.name === "ModalFooter") {
                hasFooter = true;
            }
        });
        return hasFooter;
    };

    const getModalFooter = () => {
        let modalFooter = null;
        Children.forEach(props.children, (child) => {
          if (isValidElement(child) && child.type.name === "ModalFooter") {
            modalFooter = child;
          }
        });
        return modalFooter;
    };

    const hasModalTitle = () => {
        let hasFooter = false;
        Children.forEach(props.children, (child) => {
            if (isValidElement(child) && child.type.name === "ModalTitle") {
                hasFooter = true;
            }
        });
        return hasFooter;
    };

    const getModalTitle = () => {
        let modalFooter = null;
        Children.forEach(props.children, (child) => {
          if (isValidElement(child) && child.type.name === "ModalTitle") {
            modalFooter = child;
          }
        });
        return modalFooter;
    };

    const getModalBodyChildren = () => {
        let modalBodyChildren = [];
        Children.forEach(props.children, (child) => {
          if (isValidElement(child) && child.type.name === "ModalBody") {
            modalBodyChildren = Children.toArray(child.props.children);
          }
        });
        return modalBodyChildren;
    };

    React.useImperativeHandle(ref, () => ({
        show,hide
    }));

    return  <Dialog 
                maximizable
                position='top' 
                header={hasModalTitle() ? getModalTitle() : null}
                draggable={false}
                className={props.className}
                closeOnEscape={false}
                visible={visible} 
                onHide={(e)=>setVisible(false)} 
                style={{ width: '60%' }}
                footer={hasModalFooter() ? getModalFooter() : null}
            >
                {getModalBodyChildren()}
            </Dialog>
});

export default Modal;