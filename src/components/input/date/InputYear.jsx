import { Calendar } from "primereact/calendar";

export default function InputYear(props) {
    return <Calendar
            value={props.value}
            inputId={props.id} 
            ref={props.ref} 
            onChange={props.onChange}
            view="year"
            dateFormat="yy"
        />
}