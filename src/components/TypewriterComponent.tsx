"use client";

import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <div className="text-sm lg:text-xl font-bold">
      <Typewriter
        options={{
          strings: [
            "Samuel Kuria",
            "Creative",
            "Curious",
            "Passionate",
            "Developer",
            "Philosopher",
            "FullStack Engineer",
            "Thank You!",
            "You are Amazing!",
            "Explore. Discover.",
          ],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
