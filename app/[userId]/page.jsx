"use client";

import React, { useEffect, useState } from "react";
import app from "../Shared/firebaseConfig";
import UserInfo from "../components/UserInfo";
import PinList from "../components/Pins/PinList";
import {
  doc,
  getDoc,
  collection,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";

function Profile({ params }) {
  const db = getFirestore(app);

  const [userInfo, setUserInfo] = useState();
  const [listOfPins, setListOfPins] = useState([]);
  useEffect(() => {
    console.log(params.userId.replace("%40", "@"));
    if (params) {
      getUserInfo(params.userId.replace("%40", "@"));
    }
  }, [params]);

  const getUserInfo = async (email) => {
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setUserInfo(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (userInfo?.email) {
      // Ensure userInfo.email exists before calling getUserPins
      getUserPins();
    }
  }, [userInfo]);

  const getUserPins = async () => {
    try {
      if (!userInfo?.email) return; // Stop execution if email is missing

      const q = query(
        collection(db, "pinterest-post"),
        where("email", "==", userInfo.email)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setListOfPins((listOfPins) => [...listOfPins, doc.data()]);
      });
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };
  return (
    <>
      {userInfo ? (
        <div>
          {userInfo ? <UserInfo userInfo={userInfo} /> : null}
          <PinList listOfPins={listOfPins} />
        </div>
      ) : null}
    </>
  );
}

export default Profile;
