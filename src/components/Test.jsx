import { useRef } from "react";
import Notification from "./overlay/Notification";
export default function Test() {

    const notification=useRef();

    return(
        <div>  
            <Notification ref={notification}/>
            <button onClick={()=>{
                notification.current.showWarning("qsdjqskd");
            }}>Ok</button>
            <a href="/hello">Mety</a>
        </div>
    )
}