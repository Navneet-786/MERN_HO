import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-slate-900">
      <Hero
        title={`Welcome to MERN_Care Medical Institute | Your Trusted Healthcare Provider`}
        imageUrl={"/hero-img.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </div>
  );
};

export default Home;
