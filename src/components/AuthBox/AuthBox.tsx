import classes from './AuthBox.module.scss'
import {Logo} from "../Logo/Logo.tsx";

export const AuthBox = ({children}) =>{
    return <div className={`${classes.AuthBox} py-5`}>
        <Logo full />
        {children}
    </div>
}