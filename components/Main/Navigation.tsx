import Image from "next/image";
import help from "../../public/help.svg";
import History from "../../public/history.svg";
import profile from "../../public/profile.svg";

export default function Navigation() {
  return (
    <div className="bg-Navigation p-1 flex justify-between items-center px-3">
      <div className="flex w-full pl-52 gap-7">
        <Image src={History} alt="history" className="h-auto w-auto" />
        <input
          type="text"
          placeholder="🔍 Search Team Tigray"
          name="firstname"
          className=" w-3/5 rounded-md text-center h-7 bg-search placeholder:text-white font-light text-sm"
        />
      </div>
      <div className="flex gap-1">
        <Image src={help} alt="history" />
        <Image src={profile} alt="history" width={40} height={40} />
      </div>
    </div>
  );
}
