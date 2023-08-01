class Format{ 

    static formaPrix=(prix)=>{
        const roundToDecimal=(number, decimalPlaces)=>{
            const factor = 10 ** decimalPlaces;
            return Math.round(number * factor) / factor;
        }
        const roundedNumber=roundToDecimal(prix,2);
        const options = { minimumFractionDigits: 2 };
        const formatedPrix = roundedNumber.toLocaleString('fr-FR', options);
        if(formatedPrix==='NaN'){
            return "Prix invalide";
        }
        return formatedPrix;
    }

    static formatDate=(dateStr)=>{
        const date=new Date(dateStr);
        if(date.toString()!=="Invalid Date"){
            const monthsInFrench = [
                "janvier", "février", "mars", "avril", "mai", "juin",
                "juillet", "août", "septembre", "octobre", "novembre", "décembre"
            ];
            
            const day = String(date.getDate()).padStart(2, '0');
            const month = monthsInFrench[date.getMonth()];
            const year = date.getFullYear();
            return `${day} ${month} ${year}`;
        }
        else{
            return "Date Invalide";
        }
        
    }


}
export default Format;