import Image from "next/image";
import React from "react";
import send from "../../public/send.svg";
import mic from "../../public/icon4.svg";
import video from "../../public/icon3.svg";

import at from "../../public/icon2.svg";

export default function Input() {
  return (
    <div className="rounded-lg border-2 m-5 overflow-hidden">
      <input
        type="text"
        placeholder="Make a note of something"
        className="h-20 text-lg w-full font-light"
      />
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
        <button>
          <Image src={send} alt="send" />
        </button>
      </div>
    </div>
  );
}
