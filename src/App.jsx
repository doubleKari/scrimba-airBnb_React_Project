import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Heroimage from "./assets/images/photo-grid.png";

import { data } from "./data";

const cardInfo = data.map((card) => {
  console.log(card);
  return <Card {...card} key={card.id} />;
});

function HeroSection() {
  return (
    <div className="lg:p-6 lg:px-10 lg:pt-10">
      <div className="mb-5 md:max-w-[1080px] lg:px-20 mx-auto lg:mb-10">
        <img
          src={Heroimage}
          alt="Hero"
          className="lg:object-cover lg:object-center"
        />
      </div>
      <section className="md:w-1/2 md:px-8 lg:w-full lg:mx-auto lg:pl-28 text-center md:text-left">
        <h1 className="text-3xl lg:text-6xl font-bold">Online Experiences</h1>
        <p className="py-3 px-4 text-sm md:pl-0 lg:py-4 lg:text-lg lg:w-1/2">
          Join unique interactive activities led by one-of-a-kind hosts- all
          without leaving home
        </p>
      </section>
    </div>
  );
}

function App() {
  return (
    <div className="w-full h-full font-poppins">
      <Navbar />
      <HeroSection />

      <section className="mx-auto sm:p-5  flex flex-col items-center xl:justify-center  gap-5  mb-6 sm:flex-row sm:overflow-scroll">
        {cardInfo}
      </section>
    </div>
  );
}

export default App;
