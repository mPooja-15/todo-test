import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers';
import { logger, thunk } from '../middleware';

export function configureStore(initialState) {
    let middleware = applyMiddleware(thunk, logger);
    if (process.env.NODE_ENV !== 'production') {
        middleware = composeWithDevTools(middleware);
    }
    const store = createStore(rootReducer, initialState, middleware);
    // if (module.hot) {
    //     module.hot.accept('app/reducers', () => {
    //         const nextReducer = require('app/reducers');
    //         store.replaceReducer(nextReducer);
    //     });
    // }

    return store;
}
