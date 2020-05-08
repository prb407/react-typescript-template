import { } from 'redux-saga';
import { all, delay, fork, put, takeEvery } from 'redux-saga/effects';
import { IReducerActionType } from '../../types';
import { USER } from '../constant';
import { getUserSuccess } from './action';


function* getUser() {
    yield takeEvery(USER.GET_USER as any, fetchUser);
}

function* fetchUser(action: IReducerActionType) {
    yield delay(1000)
    yield put(getUserSuccess(action.payload))
}


export default function* rootSaga() {
    yield all([
        fork(getUser)
    ])
}