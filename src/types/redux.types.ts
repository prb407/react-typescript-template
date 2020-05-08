export interface IReducerActionType {
    payload: any;
    type: string;
}

// todo
export interface ITodoState {
    todoList: string;
}


export interface IRootReduxStats {
    todo: ITodoState
}