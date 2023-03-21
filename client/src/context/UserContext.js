import { useMutation } from "@apollo/client";
import React, { useState, useContext, createContext, useEffect } from "react";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [login] = useMutation(LOGIN_USER);
  useEffect(() => {
    const LoginUser = async () => {
      const getToken = Auth.getToken();
      if (getToken) {
        try {
          let data = JSON.parse(getToken);
          //   const { data } = await login({
          //     variables: { email, password },
          //   });
          setUser(data);
        } catch (e) {
          console.error(e);
        }
      }
    };
    LoginUser();
  }, []);
  console.log(user);
  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated: !!user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
