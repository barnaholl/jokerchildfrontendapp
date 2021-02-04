import axios from "axios";

const BASE_URL="http://localhost:8080"

const getCardByIdentificationId = async (identificationId) =>{
    return await axios.get(BASE_URL+"/card/byIdentificationId?identificationId="+identificationId)
        .then(data=>console.log(data));
}

export default getCardByIdentificationId;
