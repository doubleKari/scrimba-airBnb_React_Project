import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Heroimage from "./assets/images/photo-grid.png";
import Katie from "./assets/images/Katie.png";
import wedding from "./assets/images/wedding.png";
import bike from "./assets/images/bike.png";

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
      <section className="flex flex-col items-center gap-5 mb-6">
        <Card
          img={Katie}
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie"
          price={136}
        />
        <Card
          img={wedding}
          rating="5.0"
          reviewCount={30}
          country="USA"
          title="Learn wedding photography"
          price={125}
        />
        <Card
          img={bike}
          rating="4.8"
          reviewCount={2}
          country="USA"
          title="Group Mountain Bike Ride"
          price={50}
        />
      </section>
    </div>
  );
}

export default App;
