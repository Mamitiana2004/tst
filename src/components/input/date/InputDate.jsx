import { Calendar } from "primereact/calendar";

export default function InputDate(props) {

    return <Calendar 
            value={props.value} 
            inputId={props.id} 
            ref={props.ref} 
            onChange={props.onChange} 
            showButtonBar
        />;
}