import {AuthBox} from "../components/AuthBox/AuthBox.tsx";
import {Login} from "../components/Login/Login.tsx";
import {useParams} from "react-router-dom";
import {Register} from "../components/Register/Register.tsx";

export const AuthPage = ()=>{
    const params = useParams();
    return<div className='page'>
      <AuthBox>
          {params.path==='login'&&<Login/>}
          {params.path==='register'&&<Register/>}
      </AuthBox>
    </div>
}