import React from "react";

function Hero() {
  return (
    <section className="w-full h-36 md:h-56 bg-cyan-600 flex justify-center items-center text-center">
      <div className="px-6 md:container md:mx-auto">
        <h1 className="text-lg md:text-3xl text-white font-thin">
          “I know once people get connected to real food, they never change
          back.”
        </h1>
        <i className="text-gray-100 mt-2 block">Alice Waters</i>
      </div>
    </section>
  );
}

export default Hero;
