import {Input} from "antd";
import classes from './Login.module.scss';
import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {Link} from "react-router-dom";

export const Login = () => {
    return <form className={`${classes.Login} flex flex-col items-center px-10`}>
        <Input placeholder={'email@example.com'} type={'email'} className={'my-5'}/>
        <Input.Password placeholder={"password"} type={'password'} iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
        <button className='rounded px-7 py-3 w-full mt-5 text-xl'>Login</button>
        <Link className={'my-5 font-light'} to={'/register'}>Haven't registered yet? Register</Link>
     </form>
}