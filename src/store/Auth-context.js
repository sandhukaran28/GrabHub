import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  loggedIn: false,
  getLoggedIn: async () => {},
});

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    const loggedIn = await axios.get(
      "https://grabhub-api.herokuapp.com/auth/isLoggedIn"
    );
    setLoggedIn(loggedIn.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  const authCtx = {
    loggedIn: loggedIn,
    getLoggedIn: getLoggedIn,
  };

  return (
    <AuthContext.Provider value={authCtx}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
