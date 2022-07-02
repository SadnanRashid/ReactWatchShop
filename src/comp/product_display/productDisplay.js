import { useParams } from "react-router-dom";
import "../product_display/productDisplay.css";
import Navbar from "../navbar";
import { auth, db } from "../../firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { async } from "@firebase/util";

function ProductDisplay() {
  let { id } = useParams();
  const [watchDetails, setWatchDetails] = useState("");
  const docRef = doc(db, "rolex", id);

  useEffect(() => {
    const getWatchData = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setWatchDetails(docSnap.data());
        console.log(watchDetails);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getWatchData();
  }, []);
  console.log(watchDetails);
  console.log(id);
  //
  return (
    <div>
      <Navbar />
      <div className="productBox">
        {/* <h1>This is the product page. ID: {id}</h1> */}
        <div className="productImageBox">
          <img src={watchDetails.image_1} alt="" />
        </div>
        <div className="productDescBox">
          <h2 className="productTitle">{watchDetails.title}</h2>
          <h3 className="productPrice">Price: ${watchDetails.price}</h3>
          <p className="productDesc">{watchDetails.desc}</p>
          <div className="productDescBoxBtns">
            <button className="button1" onClick={buyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDisplayGetData() {}

const buyNow = () => {
  const user = auth.currentUser;
  if (user) {
    window.location.href = "/buynow";
  } else {
    alert("You need to signin first");
  }
};

export { ProductDisplay };
