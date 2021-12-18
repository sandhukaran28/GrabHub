import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";

import Logout from "../../pages/Auth/Logout";
import AuthContext from "../../store/Auth-context";
import styles from "./MainNavigation.module.css";
import logo from "../../assets/logo.png";
const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.loggedIn;
  return (
    <Navbar className={styles.main} expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              {" "}
              <Nav.Link className={styles.link} href="/allfoods">
                Menu
              </Nav.Link>
            </li>
            {loggedIn === true && (
              <>
                <li>
                  <Nav.Link href="/my-cart">Cart</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/my-orders">My Orders</Nav.Link>
                </li>
                <li>
                  <Logout className={styles.logBtn} />
                </li>
              </>
            )}
            {loggedIn === false && (
              <>
                <li>
                  <Nav.Link href="/admin-foods">Admin Login </Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/register">Register</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/Login">Login</Nav.Link>
                </li>
              </>
            )}
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavigation;
