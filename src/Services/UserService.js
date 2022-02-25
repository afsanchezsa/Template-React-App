import { registerUser } from "../Redux/ActionCreators/AuthActionCreator"

const uploadUser=()=>(dispacth)=>{
    setTimeout(()=>{
        dispacth(registerUser("hash@trust.co","spring"))
    },3000)
}
export {uploadUser}