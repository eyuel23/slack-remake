import Image from "next/image";
import React from "react";
import profile from "../../public/profile.svg";
export default function User() {
  return (
    <div className="flex text-lg font-semibold h-14 items-center border-b-2 pl-5 gap-2">
      <Image
        src={profile}
        alt="profile"
        width={30}
        height={30}
        className="rounded-md h-auto w-auto"
      />
      <h1>eyuelmulugeta</h1>
    </div>
  );
}
