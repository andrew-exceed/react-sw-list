import actions from '../constants/actions-type'
import { getCharactersPage, getCharacterInfoService } from '../api/characters-list-service'


//все таймауты я оставил пока что себе для проверок
export const getCharactersList = (pageNumber) => {
    return dispatch => {
        dispatch(getCharactersPageStarted());
        getCharactersPage(pageNumber).then(res =>{
            setTimeout(() => {
                dispatch(getCharactersPageSuccess(res.data));
            }, 1);
        }).catch(err => {
            dispatch(getCharactersPageFailure(err.message));
        });
    }
}

const getCharactersPageSuccess = data => ({
    type: actions.GET_CHARACTERS_LIST_SUCCESS,
    payload: data
});

const getCharactersPageStarted = () => ({
    type: actions.GET_CHARACTERS_LIST_STARTED
});

const getCharactersPageFailure = error => ({
    type: actions.GET_CHARACTERS_LIST_FAILURE,
    payload: error,
});

export const getCharacterInfo = (url) => {
    return dispatch => {
        dispatch(getCharacterInfoStarted());
        getCharacterInfoService(url).then(res =>{
            setTimeout(() => {
                dispatch(getCharacterInfoSuccess(res.data));
            }, 1);
        }).catch(err => {
            dispatch(getCharacterInfoFailure(err.message));
        });
    }
}

const getCharacterInfoSuccess = data => ({
    type: actions.GET_CHARACTER_INFO_SUCCESS,
    payload: data
});

const getCharacterInfoStarted = () => ({
    type: actions.GET_CHARACTER_INFO_STARTED
});

const getCharacterInfoFailure = error => ({
    type: actions.GET_CHARACTER_INFO_FAILURE,
    payload: error,
});

export default{
    getCharactersList,
    getCharacterInfo
}