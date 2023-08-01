import { InputNumber } from 'primereact/inputnumber';
export default function InputPrix(props) {
    return <InputNumber
            value={props.value} 
            inputId={props.id} 
            ref={props.ref} 
            required={props.required==null || props.required===false ? false : true}
            onChange={props.onChange} 
            min={props.min!=null ? props.min : null}   
            max={props.max!=null ? props.max : null}    
            suffix={props.unit!=null ? ' '+props.unit : null}
            minFractionDigits={2}
            maxFractionDigits={2}
            placeholder={props.placeholder}
        />
}   