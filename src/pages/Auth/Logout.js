import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../store/Auth-context";
import styles from "./Register.module.css";
const Logout = () => {
  const history = useHistory();
  const cartCtx = useContext(AuthContext);
  const logout = async () => {
    await axios.get("https://grabhub-api.herokuapp.com/auth/logout");
    await cartCtx.getLoggedIn();
    history.push("/");
  };
  return (
    <button className={styles.logout} onClick={logout}>
      Logout
    </button>
  );
};

export default Logout;
