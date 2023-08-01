import { Calendar } from "primereact/calendar";

export default function InputTime(props) {

    

    return <Calendar 
        value={props.value} 
        inputId={props.id} 
        ref={props.ref} 
        onChange={props.onChange} 
        timeOnly
    />
}