class DateHelper{

    

    static getTime=(dateStr)=>{
        const date=new Date(dateStr);
        if(date.toString()!=="Invalid Date"){
            return String(date.getHours()).padStart(2,'0')+":"+String(date.getMinutes()).padStart('0');
        }
        else{
            return "Time invalide";
        }
    }

    static getMonth=(dateStr)=>{
        const date=new Date(dateStr);
        if(date.toString()!=="Invalid Date"){
            return String(date.getMonth()+1).padStart(2,'0');
        }
        else{
            return "Time invalide";
        }
    }

    static getYear=(dateStr)=>{
        const date=new Date(dateStr);
        if(date.toString()!=="Invalid Date"){
            return String(date.getFullYear()).padStart(4,'0');
        }
        else{
            return "Time invalide";
        }
    }


}
export default DateHelper;