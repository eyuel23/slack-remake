import Input from "./Input";
import Messages from "./Messages";
import User from "./User";

export default function Main() {
  return (
    <div className="w-[81.5%]">
      <div className="flex flex-col h-full">
        <User />
        <Messages />
        <Input />
      </div>
    </div>
  );
}
