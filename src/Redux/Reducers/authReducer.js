import { REGISTER_USER } from "../Actions/AuthActions";
const defaultUser={
    user:{
        email:'',
        password:''
    }
}
const AuthReducer=(state=defaultUser,action)=>{
    switch(action.type){
        case REGISTER_USER:
        let user=action.payload
        return {user:user};
    default:
        return state
    }
}
export{AuthReducer}