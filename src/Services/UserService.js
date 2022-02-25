import { registerUser } from "../Redux/ActionCreators/AuthActionCreator"

const uploadUser=(email,password)=>(dispacth)=>{
    setTimeout(()=>{
        dispacth(registerUser(email,password))
    },3000)
}
export {uploadUser}