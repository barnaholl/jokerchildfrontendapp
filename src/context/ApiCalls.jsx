import axios from "axios";

const BASE_URL="https://joker-child-spring.herokuapp.com";

const getCardByIdentificationId = async (identificationId) =>{
    return await axios.get(BASE_URL+"/card/byIdentificationId?identificationId="+identificationId);
}

export default getCardByIdentificationId;
