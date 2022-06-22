import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// //firebase setup is imported

//Login Function
export const login = (auth, email, pass) => {
  checkInfo(email, pass);
  if (checkInfo == false) {
    return;
  }

  signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      window.location.href = "/";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      console.log(pass);
    });
};

//Logout function
export const logOut = (auth) => {
  signOut(auth)
    .then(() => {
      console.log("Signed Out");
      window.location.href = "/login";
    })
    .catch((error) => {
      console.log(error);
      console.log("error");
    });
};

//Check if user is logged in
export function checkUser(user) {
  if (user) {
    return true;
  } else {
    return false;
  }
}

//function to register user
export function register(auth, email, pass) {
  checkInfo(email, pass);
  if (checkInfo == false) {
    return;
  }
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Registered");
      window.location.href = "/";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

const checkInfo = (email, pass) => {
  if (!email || !pass) {
    alert("Please give the necessary informations!");
    return false;
  }
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(email) == false) {
    alert("Invalid Email Address");
    return false;
  }
  return true;
};
