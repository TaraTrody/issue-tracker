import {combineReducers} from 'redux';
import alertReducer from './api/api.reducer'
import userReducer from './userAuth/userAuth.reducer'

export default combineReducers({
alertReducer,
userReducer 
})
