const initialState = {
    loading: false,
    charactersListInfo: {
        count: 0,
        results:[],
    },
    error: false,

    characterData:{},
    loadingPopUp: false,
    errorPopUp: false,
}

export default function charactersListReducer(state = initialState, actions){
    switch(actions.type) {
        case 'GET_CHARACTERS_LIST_SUCCESS':
            return{
                ...state,
                loading: false,
                charactersListInfo: actions.payload,
            }

        case 'GET_CHARACTERS_LIST_STARTED':
            return{
                ...state,
                loading: true,
                error: false,

            }
        case 'GET_CHARACTERS_LIST_FAILURE':
            return{
                ...state,
                loading: false,
                error: actions.payload,
            }


        case 'GET_CHARACTER_INFO_STARTED':
            return{
                ...state,
                loadingPopUp: true,
                errorPopUp: false,
            }
        case 'GET_CHARACTER_INFO_SUCCESS':
            return{
                ...state,
                characterData: actions.payload,
                loadingPopUp: false,
                errorPopUp: false,
            }
        case 'GET_CHARACTER_INFO_FAILURE':
            return{
                ...state,
                loadingPopUp: false,
                errorPopUp: actions.payload,
            }

        default:
            return state
    }
}
