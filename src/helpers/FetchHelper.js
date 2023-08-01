class FetchHelper{

    static setUrl=(url)=>{
        return "http://localhost:8080/"+url;
    }

    static sendMethodGet=async (url)=>{
        const response=await fetch(FetchHelper.setUrl(url),{
            method:"GET"
        });
        const data=await response.json();
        return data;
    }



}

export default FetchHelper; 