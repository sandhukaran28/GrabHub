import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom';
import Logout from '../../pages/Auth/Logout';
import AuthContext from '../../store/Auth-context';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {

const authCtx = useContext(AuthContext);
const loggedIn  =authCtx.loggedIn;
return (
<nav>
    <ul className={styles.linkUl}>
        <li><NavLink exact to="/allfoods">Menu</NavLink></li>
        {(loggedIn === true && <>
            <li><NavLink exact to="/my-cart">Cart</NavLink></li>
            <li><NavLink exact to="/my-orders">My Orders</NavLink></li>
           <li><Logout/></li>
        </>)}

        {(loggedIn === false && <>
            <li><NavLink exact to="/admin-foods">Admin Login </NavLink></li>
            <li><NavLink exact to="/register">Register</NavLink></li>
        <li><NavLink exact to="/Login">Login</NavLink></li>
        </>)}
    
    </ul>
</nav>
)
}

export default MainNavigation
