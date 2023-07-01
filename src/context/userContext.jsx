import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthProvider = createContext();
const UserContext = ({ children }) => {
  // value container:
  const [user, setUser] = useState();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  // function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const socialLogin = () => {
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  // useEffect
  useEffect(() => {
    const exit = onAuthStateChanged(auth, (currentUser) => {
      console.log("show me the userName", currentUser);
      setUser(currentUser);
      console.log("with cuser", currentUser);
      console.log("with user", user);
    });
    return () => exit;
  }, []);
  // value
  const authinfo = { user, createUser, loginUser, socialLogin, logOut };
  // return
  return (
    <AuthProvider.Provider value={authinfo}>{children}</AuthProvider.Provider>
  );
};
UserContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UserContext;
