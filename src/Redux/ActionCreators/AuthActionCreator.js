import {REGISTER_USER} from '../Actions/AuthActions'
const registerUser=(email,password)=>{
    return {
        type:REGISTER_USER,
        payload:{
            email:email,
            password:password
        }
    }

}

export {registerUser}
