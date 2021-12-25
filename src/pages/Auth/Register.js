import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../store/Auth-context";
import styles from "./Register.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import svg from "../../assets/Signup.svg";

const Register = () => {
  const register = async () => {
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

  const history = useHistory();
  const cartCtx = useContext(AuthContext);
  const UserformSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const pass = e.target.elements.pass.value;
    const verify = e.target.elements.confirm.value;

    if (pass !== verify) {
      notify("Passwords does not match!");
      return;
    }
    const data = {
      name: name,
      email: email,
      password: pass,
      passwordVerify: verify,
    };
    await axios
      .post("https://grabhub-api.herokuapp.com/auth/new", data)
      .then((res) => {
        console.log(res.data);
        register();
      })
      .catch((e) => {
        console.log(e);
      });
    notify("Please Check the details again");
  };

  return (
    <>
      <div id={styles.outer}>
        <div className={styles.left}>
          <img src={svg} alt="login" />
        </div>
        <div className={styles.right} id={styles.rightRegister}>
          <div className={styles.rDiv}>
            <h2>Sign Up to GrabHub</h2>
            <hr />
            <form onSubmit={UserformSubmit}>
              <div className={styles.group}>
                <label htmlFor="name">Name</label>
                <input
                  className={styles.authInput}
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className={styles.group}>
                <label htmlFor="email">Email</label>
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
                  minLength={6}
                />
              </div>
              <div className={styles.group}>
                <label htmlFor="verify">Confirm Your Password</label>
                <input
                  className={styles.authInput}
                  type="password"
                  name="confirm"
                  id="confirm"
                  minLength={6}
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
