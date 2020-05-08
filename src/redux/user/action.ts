import { USER } from "../constant"

export const getUser = (username: string) => {
    return {
        type: USER.GET_USER,
        payload: username
    }
}
export const getUserSuccess = (username: string) => {
    return {
        type: USER.GET_USER_SUCCESS,
        payload: username
    }
}