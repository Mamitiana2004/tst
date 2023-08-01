import { Calendar } from "primereact/calendar";

export default function InputMonth(props) {
    return <Calendar
            value={props.value}
            inputId={props.id} 
            ref={props.ref} 
            onChange={props.onChange}
            view="month"
            dateFormat="MM"
        />
}