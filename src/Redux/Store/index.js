import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { AuthReducer } from '../Reducers/authReducer';
const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            AuthReducer:AuthReducer
        }),
        applyMiddleware(thunk)
    )

    return store;
}
export{ConfigureStore}