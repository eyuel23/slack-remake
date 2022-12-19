import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Message from "./Message";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
interface messages {
  id: string;
  text: string;
  createdAt: string;
}
export default function Messages() {
  const [messages, setMessages] = useState<messages[]>([]);
  const [done, setDone] = useState(false);
  const messagesRef = collection(db, "messages");
  useEffect(() => {
    const getMessages = async () => {
      const data = await getDocs(messagesRef);
      const result: any = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const final = result;
      setMessages(result);
    };
    getMessages();
  }, [messagesRef]);
  return (
    <div className="flex flex-col h-3/5 justify-between overflow-y-scroll">
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
              time={"her"}
            />
          );
        })}
      </div>
    </div>
  );
}
