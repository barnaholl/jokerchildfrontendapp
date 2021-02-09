import axios from "axios";

const BASE_URL="http://localhost:8080"; //"https://joker-child-spring.herokuapp.com"; //
const POST_CONFIG={"Content-Type": "application/json"}

const getCardByIdentificationId = async (identificationId) =>{
    return await axios.get(BASE_URL+"/card/byIdentificationId?identificationId="+identificationId)
    ;
}

const getSessionByUserId = async (userId) =>{
    return await axios.get(BASE_URL+"/gameSession/?userId="+userId);
}

const createSession = async (session) =>{
    return await axios.post(BASE_URL+"/gameSession/",session,POST_CONFIG);
}

const deleteSessionByUserId = async (userId) =>{
    return await axios.delete(BASE_URL+"/gameSession/?userId="+userId);
}

const getSessionsCardByUserId = async (userId) =>{
    return await axios.get(BASE_URL+"/gameSession/card/?userId="+userId);
}

export {getCardByIdentificationId,getSessionByUserId,createSession,deleteSessionByUserId,getSessionsCardByUserId};