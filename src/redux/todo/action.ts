import { TODO } from "../constant"

export const addTodos = (todoList: string) => {
    console.log('todo reducer : ' + todoList)
    return {
        type: TODO.ADD_TODO,
        payload: todoList,
    }
}