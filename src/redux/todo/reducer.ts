import { IReducerActionType, ITodoState } from "../../types";
import { TODO } from "../constant";

const init: ITodoState = {
    todoList: 'this is from redux'
}

export const todoReducer = (state = init, action: IReducerActionType) => {
    switch (action.type) {
        case TODO.ADD_TODO:
            const todoList = action.payload
            state = { ...state, todoList: todoList } as ITodoState
            return state
        default:
            return state
    }
}