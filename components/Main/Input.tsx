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

export default function Input() {
  const [formValue, setFormValue] = useState("");
  const messagesRef = collection(db, "messages");
  const user = useAuthState(auth);
  const sendMessage = async (e: any) => {
    e.preventDefault();
    const currentUser = user[0]?.displayName;
    await addDoc(messagesRef, {
      text: formValue,
      user: currentUser,
      date: Timestamp.now(),
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
          onChange={inputHandler}
        />
      </form>
      <div className="flex justify-between items-center p-2 bg-stone-100">
        <div className="flex gap-2 pl-2">
          <div>+</div>
          <div className="flex border-x-2 gap-2 px-2">
            <Image src={video} alt="" width={20} height={20} />
            <Image src={mic} alt="" width={20} height={20} />
          </div>
          <div className="flex gap-2">
            <Image src={at} alt="" width={20} height={20} />
            <div className="text-lg">Aa</div>
          </div>
        </div>
        <button onClick={sendMessage}>
          <Image src={send} alt="send" />
        </button>
      </div>
    </div>
  );
}
