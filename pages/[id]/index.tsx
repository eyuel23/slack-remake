import React from "react";
import Main from "../../components/Main/Main";
import Navigation from "../../components/Main/Navigation";
import WorkSpace from "../../components/Main/WorkSpace";

export default function index() {
  return (
    <section className="flex flex-col overflow-hidden">
      <Navigation />
      <div className="flex h-full">
        <WorkSpace />
        <Main />
      </div>
    </section>
  );
}
