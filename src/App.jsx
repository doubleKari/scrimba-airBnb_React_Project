import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

import Heroimage from "./assets/images/photo-grid.png";

const info = [
  {
    caption: "Life lessons with Katie Zoferes",
    rating: "5.0",
    number: 6,
    fee: "$136",
  },
];

function HeroSection() {
  return (
    <div className="lg:p-6 lg:px-10 lg:pt-10">
      <div className="p-4 mb-5 md:max-w-[1024px] lg:px-20 mx-auto lg:mb-10">
        <img src={Heroimage} alt="Hero" />
      </div>
      <section className="md:w-1/2 md:px-8 lg:w-full lg:mx-auto text-center md:text-left">
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
      <section className="p-3 flex flex-col justify-center items-center mt-4">
        <Card
          img={require("./assets/images/katie-zaferes.png")}
          rating={info[0].rating}
          number={info[0].number}
          fee={info[0].fee}
          caption={info[0].caption}
        />
      </section>
    </div>
  );
}

export default App;
