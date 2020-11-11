import API from "./API";

export async function getCharactersPage(pageIndex){
    try {
        return await API.get(`https://swapi.dev/api/people/?page=${pageIndex}`);
    } catch (error) {
        console.error(123321,error);
    }
}

export async function getCharacterInfoService(url){
    try {
        return await API.get(`${url}`);
    } catch (error) {
        console.error(123321,error);
    }
}

export default{
    getCharacterInfoService,
    getCharactersPage,
}