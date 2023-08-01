import { Knob } from 'primereact/knob';
import { ProgressBar } from 'primereact/progressbar';

export default function Progess(props) {
    return(
        <>
            {props.type!=="cercle" || props.type==null ? 
                <ProgressBar 
                    unit={props.unit}
                    value={props.value}
                    color={props.color}
                /> 
                :
                <Knob 
                    valueTemplate={props.value +' '+props.unit}
                    value={props.value}
                    valueColor={props.color}
                    step={props.value}
                /> 
            }
        </>
    )
}