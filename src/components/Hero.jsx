import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>LOREM IPSUM DOLOR</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-blue-400">Con</span>
          sectetur
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Lorem ipsum dolor sit amet{" "}
        <span className="text-blue-400 font-medium">consectetur</span>{" "}
        adipisicing elit. Beatae in temporibus veniam{" "}
        <span className="text-blue-400 font-medium">consequatur</span>! Rerum,
        reprehenderit voluptatibus? Itaque eaque sed iure recusandae suscipit
        doloremque quidem, doloribus qui eveniet nesciunt quod minus!
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      />
    </div>
  );
}