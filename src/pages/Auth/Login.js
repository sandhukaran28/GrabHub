import React, { useContext } from "react";
import styles from "./Register.module.css";
import { useHistory } from "react-router";
import axios from "axios";
import svg from "../../assets/login.svg";
import AuthContext from "../../store/Auth-context";
const Login = () => {
  const history = useHistory();
  const cartCtx = useContext(AuthContext);
  const UserformSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const pass = e.target.elements.pass.value;
    const data = {
      email: email,
      password: pass,
    };
    await axios
      .post("http://localhost:8000/auth/login", data)
      .then(() => {
        console.log("done");
      })
      .catch((e) => {
        console.log(e);
      });
    await cartCtx.getLoggedIn();
    history.push("/");
  };

  return (
    <div id={styles.outer}>
      <div className={styles.left}>
        <img src={svg} alt="login" />
      </div>
      <div className={styles.right}>
        <div className={styles.rDiv}>
          <h2>Log In to GrabHub</h2>
          <hr />
          <form onSubmit={UserformSubmit}>
            <div className={styles.group}>
              <label htmlFor="email">Email Address</label>
              <input
                className={styles.authInput}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="pass">Password</label>
              <input
                className={styles.authInput}
                type="password"
                name="pass"
                id="pass"
              />
            </div>
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
