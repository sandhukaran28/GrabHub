import React, { useContext } from "react";
import styles from "./Register.module.css";
import { useHistory } from "react-router";
import axios from "axios";
import svg from "../../assets/login.svg";
import AuthContext from "../../store/Auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const history = useHistory();
  const cartCtx = useContext(AuthContext);

  const login = async () => {
    await cartCtx.getLoggedIn();
    history.push("/");
  };

  const notify = (e) =>
    toast.error(e, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  const UserformSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const pass = e.target.elements.pass.value;
    const data = {
      email: email,
      password: pass,
    };
    await axios
      .post("https://grabhub-api.herokuapp.com/auth/login", data)
      .then(() => {
        console.log("done");
        login();
      })
      .catch((e) => {
        console.log(e);
      });
    notify("Email Or Password may be incorrect");
  };

  return (
    <>
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
      <ToastContainer />
    </>
  );
};

export default Login;
