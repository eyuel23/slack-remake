import Message from "./Message";

export default function Messages() {
  const messages = [
    { id: 1, name: "eyuel mulugeta", message: "this is it" },
    { id: 2, name: "eyuel mulugeta", message: "this is it" },
  ];
  return (
    <div className="flex flex-col h-3/5 justify-between">
      <p className="text-sm font-light p-5 text-center">
        <span className="font-normal"> This space is just for you.</span> Jot
        down notes, list your to-dos or, keep links and files handy. you can
        also talk to yourself here, but please bear in mind hat you have to
        supply
        <br />
        both sides of the conversation.
      </p>
      <div className="flex flex-col">
        <Message />
        <Message />
      </div>
    </div>
  );
}
