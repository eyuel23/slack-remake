import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Message from "./Message";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
interface messages {
  id: string;
  text: string;
  user: string;
  createdAt: any;
  date: string;
}
export default function Messages() {
  const [messages, setMessages] = useState<messages[]>([]);
  const messagesRef = collection(db, "messages");
  function secondsToHoursMinutes(seconds: number) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    return hours + " : " + minutes;
  }
  useEffect(() => {
    const getMessages = async () => {
      const data = await getDocs(messagesRef);
      const result: any = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(result);
      setMessages(result);
    };
    return () => {
      getMessages();
    };
  }, []);
  return (
    <div className="flex flex-col h-[31rem] justify-between overflow-y-scroll">
      <p className="text-sm font-light p-5 text-center">
        <span className="font-normal"> This space is just for you.</span> Jot
        down notes, list your to-dos or, keep links and files handy. you can
        also talk to yourself here, but please bear in mind hat you have to
        supply
        <br />
        both sides of the conversation.
      </p>
      <div className="flex flex-col">
        {messages.map((res) => {
          return (
            <Message
              key={res.id}
              id={res.id}
              name={res.user}
              text={res.text}
              time={res.date}
            />
          );
        })}
      </div>
    </div>
  );
}
