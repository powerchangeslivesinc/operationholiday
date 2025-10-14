import { useState } from "react";

interface Slide {
  image: string;
  title?: string;
  description?: string;
}

// ✅ Define props type
interface CarouselProps {
  slides: Slide[];
}

export default function VendorCarousel({ slides = [] }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No slides available.
      </div>
    );
  }

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div className="relative max-w-4/5 mx-auto my-8">
      <div className="overflow-hidden h-150 rounded-xl relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
              index === current ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {(slide.title || slide.description) && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 bg-black/60 text-white p-4 text-center rounded-t">
                <h4 className="text-lg font-bold mb-2">{slide.title}</h4>
                <p className="text-sm">{slide.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded"
      >
        ›
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full ${
              idx === current ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
