import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducer';
import sagas from './saga'

// import sagas from './saga';
const sagaMiddleware: any = createSagaMiddleware();

const middlewares: any = [sagaMiddleware];

export function configureStore() {
    const store: any = createStore(rootReducer, {}, compose(applyMiddleware(...middlewares)));

    sagaMiddleware.run(sagas);

    if ((module as any).hot) {
        (module as any).hot.accept('./reducer', () => {
            const nextRootReducer = require('./reducer');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
