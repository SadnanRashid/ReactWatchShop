import { useState, useEffect } from "react";
import "../comp_admin/admin.css";
import {
  writeDocToDB,
  checkAdmin,
  loginAdmin,
  adminLogout,
} from "../comp_admin/admin_functions";
import { auth } from "../../firebase/firebase-config";

function AdminPage() {
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
        <AdminPageRolex />
      </div>
    );
  } else if (!user) {
    //Check if logged out
    return (
      <div>
        <AdminPageLogin />
      </div>
    );
  }
}

function AdminPageLogin() {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPass, setAdminPass] = useState("");
  return (
    <div className="adminPageLogin">
      <input
        type="text"
        id="adminPageLoginEmail"
        placeholder="Email"
        onChange={(event) => setAdminEmail(event.target.value)}
      />

      <input
        type="password"
        id="adminPageLoginPass"
        placeholder="Password"
        onChange={(event) => setAdminPass(event.target.value)}
      />

      <input
        type="submit"
        value="Login"
        // onClick={() => SomeFunction(args)}
        onClick={() => loginAdmin(auth, adminEmail, adminPass)}
      />
    </div>
  );
}

function AdminPageRolex() {
  const [watchTitle, setWatchTitle] = useState("");
  const [watchDesc, setWatchDesc] = useState("");
  const [watchImage, setWatchImage] = useState("");
  const [watchPrice, setWatchPrice] = useState();
  const [watchStock, setWatchStock] = useState();

  return (
    <div className="adminPageRolex">
      <input
        type="text"
        id="titleRolex"
        placeholder="Title"
        onChange={(event) => setWatchTitle(event.target.value)}
      />

      <input
        type="text"
        id="priceRolex"
        placeholder="Price"
        onChange={(event) => setWatchPrice(event.target.value)}
      />

      <input
        type="text"
        id="imageRolex"
        placeholder="Image Link"
        onChange={(event) => setWatchImage(event.target.value)}
      />

      <input
        type="text"
        id="stockRolex"
        placeholder="Stock Amount"
        onChange={(event) => setWatchStock(event.target.value)}
      />

      <textarea
        id="descRolex"
        rows="10"
        cols="30"
        onChange={(event) => setWatchDesc(event.target.value)}
      ></textarea>

      <br />

      <input
        type="submit"
        value="Post Watch"
        // onClick={() => SomeFunction(args)}
        onClick={() =>
          writeDocToDB(
            watchDesc,
            watchImage,
            watchPrice,
            watchStock,
            watchTitle
          )
        }
      />
      <input
        type="submit"
        value="Logout"
        // onClick={() => SomeFunction(args)}
        onClick={() => adminLogout(auth)}
      />
    </div>
  );
}

export { AdminPage };
