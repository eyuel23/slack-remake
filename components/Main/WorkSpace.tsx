import Image from "next/image";
import React from "react";
import Write from "../../public/write.svg";
import option from "../../public/option.svg";

export default function WorkSpace() {
  return (
    <div className="min-h-screen bg-slack w-[18.5%] text-white font-Lato">
      <div className="flex items-center justify-between px-5 border-y-[0.1px] border-stone-500 py-2">
        <h1 className="text-xl ">Team Tigray</h1>
        <Image src={Write} alt="write" />
      </div>
      <div className="flex items-center  pl-3 border-y-[0.1px] border-stone-500 py-3 text-gray-300">
        <Image src={option} alt="option" />
        <h1 className="text-md font-Lato">Browse slack</h1>
      </div>
      <div className="text-stone-300 p-4  flex flex-col gap-5">
        <ul className="flex flex-col gap-1">
          <li className="pb-2">▼ Channels</li>
          <li># general</li>
          <li># random</li>
          <li># web-app</li>
          <li>+ Add Channels</li>
        </ul>
        <ul>
          <li>▼ Direct message</li>
          <li>😳 eyuel mulugeta</li>
          <li className="text-white">+ Add Teammates</li>
        </ul>
      </div>
    </div>
  );
}
