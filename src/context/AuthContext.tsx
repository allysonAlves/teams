import { createContext, useContext, useEffect, useState } from "react";
import { DeviceEventEmitter } from "react-native";
import * as AuthStorage from "../storage/Auth.storage";
import { Axios } from "../services/AxiosBasic";

import { ChildrenProps } from "../@types/globalTypes";
import { AuthContextType, UserType, loginResponse } from "./interfaces";

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState({} as UserType);

  const signIn = (email: string, password: string) => {
    const request = {
      email,
      password,
    };

    Axios.post<loginResponse>("api/signIn", request)
      .then((response) => {
        Axios.defaults.headers.common.Authorization =
          "Bearer " + response.data.access_token;

        setUser({ email, name: "Allyson" });
        AuthStorage.storageUserSave({ email, name: "Allyson", access_token: response.data.access_token });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerUser = (email: string, password: string) => {
    const request = {
      email,
      password,
    };

    Axios.post("api/signUp", request)
      .then((resp) => {})
      .catch((error) => {});
  };

  const logout = () => {
    setUser({} as UserType);
    AuthStorage.storageUserRemove();
  };

  const checkUserSaved = async () => {
    try {
      const savedUser = await AuthStorage.storageUserGet();

      if (savedUser) {
        const userObj = JSON.parse(savedUser);
        setUser(userObj);
        Axios.defaults.headers.common.Authorization =
        "Bearer " + userObj.access_token;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkUserSaved();
    DeviceEventEmitter.addListener("logout", () => logout());

    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, logout, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
