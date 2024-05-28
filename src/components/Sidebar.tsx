import {Link} from "react-router-dom";

export const Sidebar = () => {
    return<nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/profile'}>Profile</Link>
    </nav>
}