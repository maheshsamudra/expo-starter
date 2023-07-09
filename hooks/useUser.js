import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";
import axios from "axios";

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (email, password) =>
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setIsLoggedIn(!!user?.uid);
    });
  }, []);

  const resetPassword = async (email) =>
    sendPasswordResetEmail(auth, email)
      .then(() => true)
      .catch(() => false);

  const logout = async () => {
    console.log("logging out");
    await signOut(auth);
  };

  const api = async (endpoint, data) =>
    await axios
      .post(endpoint, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth?.currentUser?.accessToken}`,
        },
      })
      .then((res) => res?.data)
      .catch((re) => null);

  const savePushToken = async (token) => {
    await api("push-token", { token }).catch(() => null);
    return true;
  };

  const register = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const value = useMemo(
    () => ({
      user: auth?.currentUser,
      expoPushToken,
      setExpoPushToken,
      notification,
      setNotification,
      login,
      register,
      savePushToken,
      resetPassword,
      logout,
    }),
    [expoPushToken, notification, isLoggedIn],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
