import React from "react";
import Main from "../../components/Main/Main";
import Navigation from "../../components/Main/Navigation";
import WorkSpace from "../../components/Main/WorkSpace";

export default function index() {
  return (
    <section className="flex flex-col min-h-screen">
      <Navigation />
      <div className="flex">
        <WorkSpace />
        <Main />
      </div>
    </section>
  );
}
