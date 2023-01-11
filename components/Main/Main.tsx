import Input from "./Input";
import Messages from "./Messages";
import User from "./User";

export default function Main() {
  return (
    <div className="sm:w-[81.5%] w-full">
      <div className="flex flex-col h-full">
        <User />
        <Messages />
        <Input />
      </div>
    </div>
  );
}
