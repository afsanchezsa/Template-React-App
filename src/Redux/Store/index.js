import {createStore,combineReducers} from 'redux';
import { AuthReducer } from '../Reducers/authReducer';
const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            AuthReducer:AuthReducer
        })
    )

    return store;
}
export{ConfigureStore}