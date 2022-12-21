import Image from "next/image";
import React, { useState } from "react";
import send from "../../public/send.svg";
import mic from "../../public/icon4.svg";
import video from "../../public/icon3.svg";
import at from "../../public/icon2.svg";
import {
  addDoc,
  collection,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { fetchactions } from "../../store";

export default function Input() {
  const [formValue, setFormValue] = useState("");
  const dispatch = useDispatch();
  const messagesRef = collection(db, "messages");
  const user = useAuthState(auth);
  const sendMessage = async (e: any) => {
    dispatch(fetchactions.changeFetch());
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    e.preventDefault();
    const currentUser = user[0]?.displayName;
    await addDoc(messagesRef, {
      text: formValue,
      user: currentUser,
      date: timeString,
      createdAt: serverTimestamp(),
    });
    setFormValue("");
  };

  const inputHandler = (e: any) => {
    e.preventDefault();
    setFormValue(e.target.value);
  };
  return (
    <div className="rounded-lg border-2 m-5 overflow-hidden shadow-md">
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Make a note of something"
          className="h-20 text-lg w-full font-light pl-3"
          value={formValue}
          onChange={inputHandler}
        />
      </form>
      <div className="flex justify-between items-center p-2 bg-stone-100">
        <div className="flex gap-2 pl-2">
          <div>+</div>
          <div className="flex border-x-2 gap-2 px-2">
            <Image
              src={video}
              alt=""
              width={20}
              height={20}
              className="h-auto w-auto"
            />
            <Image
              src={mic}
              alt=""
              width={20}
              height={20}
              className="h-auto w-auto"
            />
          </div>
          <div className="flex gap-2">
            <Image
              src={at}
              alt=""
              width={20}
              height={20}
              className="h-auto w-auto"
            />
            <div className="text-lg">Aa</div>
          </div>
        </div>
        <button onClick={sendMessage}>
          <Image src={send} alt="send" className="h-auto w-auto" />
        </button>
      </div>
    </div>
  );
}
