import React from "react";

const HeroSection = () => {
  return (
    <header className="w-full h-auto">
      <img
        className="w-full h-150 hidden md:block"
        src="https://images.pexels.com/photos/7988742/pexels-photo-7988742.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt=""
      />
      <img
        className="w-full h-200 md:hidden"
        src="https://images.pexels.com/photos/12899140/pexels-photo-12899140.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt=""
      />
    </header>
  );
};

export default HeroSection;
