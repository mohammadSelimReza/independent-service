import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthProvider = createContext();
const UserContext = ({ children }) => {
  // value container:
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
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
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };
  const logOut = () => {
    return signOut(auth);
  };
  // useEffect
  useEffect(() => {
    const unSigned = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("see me", currentUser);
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => unSigned();
  }, []);
  // value
  const authinfo = {
    user,
    loading,
    createUser,
    loginUser,
    socialLogin,
    logOut,
    verifyEmail,
  };
  // return
  return (
    <AuthProvider.Provider value={authinfo}>{children}</AuthProvider.Provider>
  );
};
UserContext.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UserContext;
