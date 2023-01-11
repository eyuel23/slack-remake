import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Message from "./Message";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
interface messages {
  id: string;
  text: string;
  user: string;
  createdAt: any;
  date: string;
}
export default function Messages() {
  const [messages, setMessages] = useState<messages[]>([]);
  const fetch = useSelector((state: any) => state.fetch.fetch);
  useEffect(() => {
    const messagesRef = collection(db, "messages");
    const getMessages = async () => {
      const data = await getDocs(messagesRef);
      const result: any = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        createdAt: doc.data().createdAt,
      }));
      console.log(data, result);
      const sortedArray = result.sort((a: any, b: any) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
      setMessages(sortedArray);
    };
    return () => {
      getMessages();
    };
  }, [fetch]);
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
