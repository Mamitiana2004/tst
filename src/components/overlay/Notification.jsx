import { forwardRef, useImperativeHandle, useRef } from "react";
import { Toast } from 'primereact/toast';
import ToastHelper from './ToastHelper';
const Notification=forwardRef((props,ref)=>{

    const toast=useRef(null);

    const showResponse=(response)=>{
        toast.current.show({ 
            severity: ToastHelper.getToastSeverity(response), 
            summary: ToastHelper.getToastSummary(response), 
            detail: response.message 
        });
    }

    const showError=(message)=>{
        toast.current.show({ 
            severity: 'error', 
            summary: 'Erreur', 
            detail: message 
        });
    }

    const showSuccess=(message)=>{
        toast.current.show({ 
            severity: 'success', 
            summary: 'Succes', 
            detail: message 
        });
    }

    const showWarning=(message)=>{
        toast.current.show({ 
            severity: 'warn', 
            summary: 'Warning', 
            detail: message 
        });
    }

    const showInfo=(message)=>{
        toast.current.show({ 
            severity: 'info', 
            summary: 'Info', 
            detail: message 
        });
    }

    const showMessage=(title,message)=>{
        toast.current.show({  
            summary: title, 
            detail: message 
        });
    }

    useImperativeHandle(ref, () => ({
        showResponse: showResponse,
        showError: showError,
        showSuccess: showSuccess,
        showWarning: showWarning,
        showInfo: showInfo,
        showMessage: showMessage
    }));

    return  <Toast 
                ref={toast} 
            />;

});

export default Notification;