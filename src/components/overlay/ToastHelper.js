class Util{

    static getToastSeverity=(res)=>{
        if(res.success!=null){
            return "success";
        }
        if(res.warining!=null){
            return "warn";
        }
        if(res.error!=null){
            return "error";
        }
        return "info";
    }

    static getToastSummary=(res)=>{
        if(res.success!=null){
            return "Succes";
        }
        if(res.warining!=null){
            return "Attention";
        }
        if(res.error!=null){
            return "Erreur";
        }
        return "Info";
    }


}
export default Util;