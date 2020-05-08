export interface IReducerActionType {
    payload: any;
    type: string;
}

// todo
export interface ITodoState {
    todoList: string;
}

// user
export interface IUserState extends ILoadingAndError {
    userName: string | null;
}


export interface ILoadingAndError {
    loading: boolean;
    error: '';
}

export interface IRootReduxStats {
    todo: ITodoState;
    user: IUserState;
}