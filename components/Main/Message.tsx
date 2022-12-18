import Image from "next/image";
import React from "react";
import profile from "../../public/profile.svg";
export default function Message() {
  return (
    <div className="flex gap-2 items-center px-5 py-2">
      <Image
        src={profile}
        alt="profile"
        width={36}
        height={45}
        className="rounded-md"
      />
      <div className="">
        <h1 className="font-semibold">eyuelmulugeta05</h1>
        <div className="font-light">hey</div>
      </div>
    </div>
  );
}
