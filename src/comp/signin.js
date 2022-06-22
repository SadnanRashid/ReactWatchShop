import "./signin_folder/signin.css";
import "./css/signinMain.css";
// import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase-config";
import {
  login,
  logOut,
  checkUser,
  register,
} from "./signin_folder/signin_functions";
import Navbar from "./navbar";

function Signin() {
  const user = auth.currentUser;

  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 1000);
  }, []);

  if (user) {
    //Check if logged in
    return (
      <div>
        <Navbar />
        <LoggedIn />
      </div>
    );
  } else if (!user) {
    //Check if logged out
    return (
      <div>
        <Navbar />
        <LoggedOut />
      </div>
    );
  }
}

//React :

function LoggedIn() {
  return (
    <div id="loggedInDiv">
      <h1>You are already logged in!</h1>
      <button id="btnSO" onClick={() => logOut(auth)}>
        Signout
      </button>
    </div>
  );
}

function LoggedOut() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailR, setEmailR] = useState("");
  const [passR, setPassR] = useState("");
  return (
    <div className="divMain">
      {/* Signin form */}
      <div className="divSignIn">
        <h3 id="signInText">Login: </h3>

        <input
          type="text"
          id="emailSI"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          id="passSI"
          placeholder="Password"
          onChange={(event) => setPass(event.target.value)}
        />
        <input
          type="submit"
          value="Sign In"
          onClick={() => login(auth, email, pass)}
        />
      </div>
      {/* Signup form */}
      <div className="divSignUp">
        <h3 id="signUpText">Registration: </h3>

        <input
          type="text"
          id="emailSI"
          placeholder="Email"
          onChange={(event) => setEmailR(event.target.value)}
        />
        <input
          type="password"
          id="passSI"
          placeholder="Password"
          onChange={(event) => setPassR(event.target.value)}
        />
        <input
          type="submit"
          value="Sign Up"
          onClick={() => register(auth, emailR, passR)}
        />
      </div>
    </div>
  );
}

export { Signin };
