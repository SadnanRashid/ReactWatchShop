import "./css/rolex_design.css";
import { db } from "../../firebase/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";
import Navbar from "../navbar";

const RolexPage = () => {
  const [watches, setWatches] = useState([]);
  const docRef = collection(db, "rolex");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getWatches = async () => {
      const data = await getDocs(docRef);
      setWatches(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(true);
    };
    getWatches();
  }, []);

  if (loading === true) {
    return (
      <div>
        <Navbar />
        <div className="mainDivWatch">
          {watches.map((watch) => {
            return (
              <div className="watchBox">
                <div className="imgBox">
                  <img src={watch.image_1} className="watchBoxImg" alt="" />
                </div>
                <div className="descBox">
                  <div className="titleBox">
                    {/* <link to={`rolex/${watch.id}`}>{watch.title}</link> */}
                    <a href={`product/${watch.id}`}>{watch.title}</a>
                    {/* <p className="title">{watch.title}</p> */}
                    {/* <p>{watch.id}</p> */}
                  </div>
                  <div className="priceBox">
                    <p className="price">Price: ${watch.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
};

export { RolexPage };
