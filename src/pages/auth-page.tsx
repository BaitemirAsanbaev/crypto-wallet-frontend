import {AuthBox} from "../components/AuthBox/AuthBox.tsx";
import {AuthForm} from "../components/AuthForm/AuthForm.tsx";

export const AuthPage = () => {
    return <div className='page'>
        <AuthBox>
            <AuthForm/>
        </AuthBox>
    </div>
}