import Image from "next/image";
import React from "react";
import profile from "../../public/profile.svg";
interface props {
  id: string;
  name: string;
  text: string;
  time: string;
}
export default function Message({ id, name, text, time }: props) {
  let exactTime = time.substring(time.length - 8);
  return (
    <div className="flex gap-2 items-center px-5 py-2">
      <Image
        src={profile}
        alt="profile"
        width={36}
        height={45}
        className="rounded-md "
      />
      <div className="">
        <h1 className="font-semibold">
          {name}{" "}
          <span className="font-normal text-xs text-gray-500">{exactTime}</span>
        </h1>
        <div className="font-light">{text}</div>
      </div>
    </div>
  );
}
