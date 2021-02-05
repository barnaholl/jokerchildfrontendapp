import axios from "axios";

const BASE_URL="http://localhost:8080"

const getCardByIdentificationId = async (identificationId) =>{
    return await axios.get(BASE_URL+"/card/byIdentificationId?identificationId="+identificationId);
}

export default getCardByIdentificationId;
