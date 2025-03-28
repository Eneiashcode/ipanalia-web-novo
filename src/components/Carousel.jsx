// src/components/Carousel.jsx
import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Carousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    created: (slider) => {
      setInterval(() => {
        slider.next();
      }, 4000); // Troca a cada 4s
    },
  });

  const imagens = [
    "/carrossel/Crrs_1.png",
    "/carrossel/Crrs_2.png",
    "/carrossel/Crrs_3.png",
  ];

  return (
    <div ref={sliderRef} className="keen-slider mt-4 mx-4">
      {imagens.map((src, index) => (
        <div
          key={index}
          className="keen-slider__slide overflow-hidden rounded-xl shadow-md"
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
      ))}
    </div>
  );
}
