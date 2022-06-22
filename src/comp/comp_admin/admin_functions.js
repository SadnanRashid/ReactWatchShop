import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const writeDocToDB = async (
  watchDesc,
  watchImage,
  watchPrice,
  watchStock,
  watchTitle
) => {
  const docRef = await addDoc(collection(db, "rolex"), {
    title: watchTitle,
    desc: watchDesc,
    image_1: watchImage,
    price: watchPrice,
    stock: watchStock,
  });
  console.log("Document written with ID: ", docRef.id);
  window.location.href = "/admin";
};

const checkAdmin = async (adminEmail, adminPass) => {
  const docRef = doc(db, "admin", "admin_login");
  const docSnap = await getDoc(docRef);
  console.log("run");
  if (docSnap.exists()) {
    if (
      adminEmail == docSnap.data().email &&
      adminPass == docSnap.data().password
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    console.log("No such document!");
  }
};

const loginAdmin = async (auth, adminEmail, adminPass) => {
  const docRef = doc(db, "admin", "admin_login");
  const docSnap = await getDoc(docRef);
  signInWithEmailAndPassword(auth, adminEmail, adminPass)
    .then((userCredential) => {
      // Signed in
      if (
        adminEmail == docSnap.data().email &&
        adminPass == docSnap.data().password
      ) {
        const user = userCredential.user;
        console.log(user);
        window.location.href = "/admin";
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

const adminLogout = (auth) => {
  signOut(auth)
    .then(() => {
      console.log("Signed Out");
      window.location.href = "/admin";
    })
    .catch((error) => {
      console.log(error);
      console.log("error");
    });
};

export { writeDocToDB, checkAdmin, loginAdmin, adminLogout };
