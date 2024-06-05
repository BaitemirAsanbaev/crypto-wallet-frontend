import {Input} from "antd";
import classes from './AuthForm.module.scss';
import React, {useRef, useState} from "react";
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
// @ts-ignore
import uploadIcon from './upload.svg';

export const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [isNext, setIsNext] = useState(false);

    function handleLogin() {

    }
    const imgInpRef = useRef(null);
    return <form className={`${classes.Login} flex flex-col items-center px-10`}>
        {isNext ?
            <>
                <input type={'file'} ref={imgInpRef}/>
                <img onClick={()=>imgInpRef.current.click()} src={uploadIcon} alt={'upload image'}/>
                <Input value={firstname} onInput={(e) => setFirstname(e.target['value'])} placeholder={'firstname'}
                       type={'text'} className={'my-5'}/>
                <Input value={lastname} onInput={(e) => setLastname(e.target['value'])} placeholder={'lastname'}
                       type={'text'}/>
                <div className={'w-full'}>

                    <button className='rounded px-7 py-3 w-full mt-5  text-xl'>Save</button>
                </div>
                <button className='rounded bg-none w-1/2 mt-5 text-xl' onClick={() => setIsNext(false)}>back</button>
            </>
            :
            <>
                <Input value={email} onInput={(e) => setEmail(e.target['value'])} placeholder={'email@example.com'}
                       type={'email'} className={'my-5'}/>
                <Input.Password
                    value={password}
                    onInput={(e) => setPassword(e.target['value'])}
                    placeholder={"password"}
                    type={'password'}
                    iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}/>
                <div className='flex justify-between w-full'>
                    <button className='rounded px-7 py-3 w-2/5 mt-5  text-xl'>Login</button>
                    <button className='rounded px-7 py-3 w-2/5 mt-5 text-xl' onClick={() => setIsNext(true)}>Register
                    </button>
                </div>
            </>
        }
    </form>
}