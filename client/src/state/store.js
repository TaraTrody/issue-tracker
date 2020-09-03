import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from redux-logger;
import rootReducer from './rootReducer'

const loggerMiddleware = createLogger();

const store = (preloadedState) => {
  return createStore( 
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
}


export default store;