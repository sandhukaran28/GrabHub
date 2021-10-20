import React from 'react'
import {NavLink} from 'react-router-dom';
import styles from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
       <nav>
           <ul className={styles.linkUl}>
               <li><NavLink exact to="/allfoods">Menu</NavLink></li>
               <li><NavLink exact to="/my-cart">Cart</NavLink></li>
           </ul>
       </nav>
    )
}

export default MainNavigation
