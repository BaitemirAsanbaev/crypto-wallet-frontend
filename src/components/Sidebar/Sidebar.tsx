import {Link} from "react-router-dom";
import classes from './Sidebar.module.scss'
import Icon from "antd/lib/icon";
import {Image} from "antd";
// @ts-ignore
import home from './assets/home.svg';
// @ts-ignore
import swap from './assets/swap.svg';
// @ts-ignore
import chat from './assets/chat.svg';
// @ts-ignore
import profile from './assets/profile.svg';
import {Logo} from "../Logo/Logo.tsx";

export const Sidebar = () => {
    return <nav className={classes.Sidebar}>
        <Logo/>
        <Link to={'/'}><img src={home} alt='home link'/> <span>Home</span></Link>
        <Link to={'/swap'}><img src={swap} alt='swap link'/> <span>Swap</span></Link>
        <Link to={'/chat'}><img src={chat} alt='chat link'/> <span>Chat</span></Link>
        <Link to={'/profile'}><img src={profile} alt='profile link'/><span>Profile</span></Link>
    </nav>
}