import axios from "axios";

const BASE_URL="https://joker-child-spring.herokuapp.com"; //"http://localhost:8080";

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

const getExperienceByExerciseIdAndUserId = async (exerciseId,userId) =>{
    return await axios.get(BASE_URL+"/gameHistory/getExperienceByExerciseIdAndUserId?exerciseId="+exerciseId+"&userId="+userId);
}

const getSumXpByMemberIdAndCardId = async (userId,cardId) =>{
    return await axios.get(BASE_URL+"/gameHistory/getSumXpByCardIdAndMemberId?cardId="+cardId+"&memberId="+userId);
}

const getXpByMemberId = async (userId) =>{
    return await axios.get(BASE_URL+"/member/getXpByMemberId?id="+userId);
}

const getPlayedExercisesCountByMemberId = async (userId) =>{
    return await axios.get(BASE_URL+"/gameHistory/getPlayedExercisesCountByMemberId?memberId="+userId);
}

const getIsSessionActiveByUserId = async (userId) =>{
    return await axios.get(BASE_URL+"/gameSession/isActive?userId="+userId);
}




export {
    getCardByIdentificationId,
    getSessionByUserId,
    createSession,
    deleteSessionByUserId,
    getSessionsCardByUserId,
    getExperienceByExerciseIdAndUserId,
    getSumXpByMemberIdAndCardId,
    getXpByMemberId,
    getPlayedExercisesCountByMemberId,
    getIsSessionActiveByUserId
};