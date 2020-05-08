import { IReducerActionType, IUserState } from "../../types";
import { USER } from "../constant";

const init: IUserState = {
    userName: localStorage.getItem('userName'),
    loading: false,
    error: ''
}

export const userReducer = (state = init, action: IReducerActionType) => {
    console.log(`userReducer`, action.type)
    switch (action.type) {
        case USER.GET_USER:
            return { ...state, loading: true } as IUserState
        case USER.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                userName: action.payload
            } as IUserState
        default:
            return state
    }
}