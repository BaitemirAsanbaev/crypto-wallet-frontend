import {Link} from "react-router-dom";
import classes from './Sidebar.module.scss'
export const Sidebar = () => {
    return<nav className={classes.Sidebar}>
        <Link to={'/'}>Home</Link>
        <Link to={'/profile'}>Profile</Link>
    </nav>
}