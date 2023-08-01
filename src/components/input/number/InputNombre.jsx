import { InputNumber } from 'primereact/inputnumber';
export default function InputNombre(props) {
    return <InputNumber
            value={props.value} 
            inputId={props.id} 
            ref={props.ref} 
            required={props.required==null || props.required===false ? false : true}
            onChange={props.onChange} 
            min={props.min!=null ? props.min : null}   
            max={props.max!=null ? props.max : null}    
            suffix={props.suffix!=null ? ' '+props.suffix : null}
            prefix={props.prefix!=null ? ' '+props.prefix : null}
            showButtons={props.mode!=null ? true : false}
            buttonLayout={(props.mode!=null ) ? (props.mode==="vertical" ? "vertical":"horizontal"):"stacked"}
            decrementButtonClassName={props.moinClassName !=null ?  props.moinClassName : props.buttonClassName} 
            incrementButtonClassName={props.plusClassName !=null ?  props.plusClassName : props.buttonClassName}
            incrementButtonIcon="pi pi-plus" 
            decrementButtonIcon="pi pi-minus"
            placeholder={props.placeholder}
            style={props.mode==="vertical" ? { width: '3rem' }:null}            
        />
}   