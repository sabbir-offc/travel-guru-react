import { createContext } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const googleSign = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = { googleSign };
  return (
    <AuthContext.Provider value={authInfo}>{children} </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
