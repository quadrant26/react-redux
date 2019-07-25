import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import createSagaMiddleware  from 'redux-saga'
import mySagas from './sagas.js'
// import thunk from 'redux-thunk'

// 无法使用 redux-devtools
// const store = createStore(
//     reducer, 
//     applyMiddleware(thunk)
// )

// 使用 redux-thunk
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// const enhancers = composeEnhancers(applyMiddleware(thunk))

// const store = createStore(
//     reducer, 
//     enhancers
// )

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(
    reducer, 
    enhancers
)
sagaMiddleware.run(mySagas)

export default store