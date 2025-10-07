import { useState } from "react";

// Import images
import art from "/vendor-imgs/art.webp";
import stylist from "/vendor-imgs/stylist.webp";
import choir from "/vendor-imgs/choir.webp";
import communications from "/vendor-imgs/communications.webp";
import dj from "/vendor-imgs/dj.webp";
import food from "/vendor-imgs/food_service.webp";
import makeup from "/vendor-imgs/makeup_artist.webp";
import massage from "/vendor-imgs/massage.webp";
import venue from "/vendor-imgs/venue.webp";

export default function VendorCarousel() {
  const slides = [
    {
      image: art,
      title: "🎨 Art Therapy (Face Painting, DIY & Caricatures)",
      description:
        "Creative stations reduce stress for kids and caregivers through hands-on art, face painting, and keepsake caricatures. Staff encourage self-expression and coping through play.",
    },
    {
      image: stylist,
      title: "💈 Barber/Stylist",
      description:
        "Licensed barbers and stylists offer free cuts and styling to restore confidence and dignity. Hygiene kits and referrals to low-cost salons are provided when available.",
    },
    {
      image: choir,
      title: "🎵 Choir",
      description:
        "Community choir provides uplifting holiday sets that set a joyful tone. Singers can lead brief sing-alongs and tailor selections to the audience, stage space, and program timing.",
    },
    {
      image: communications,
      title: "📱 Communications (Phone, Tablet)",
      description:
        "Providers help families access low-cost devices and discount internet programs (e.g., ACP alternatives). Assistance includes eligibility checks and sign-up support.",
    },
    {
      image: dj,
      title: "🎧 DJ",
      description:
        "Professional DJs curate family-friendly music, make announcements, and keep activities on schedule. They lead interactive games and sing-alongs while managing volume levels to maintain a safe, welcoming atmosphere.",
    },
    {
      image: food,
      title: "🍽️ Food Service",
      description:
        "Team assembles and distributes sealed, pre-packaged food gift boxes and beverages. Volunteers follow food-safety protocols, manage lines, accommodate common dietary needs, and keep the service area clean and stocked.",
    },
    {
      image: makeup,
      title: "💄 Makeup Artist",
      description:
        "Free makeup applications and tips for special occasions and interviews. Focus on confidence-building and self-care.",
    },
    {
      image: massage,
      title: "💆 Massage Therapy",
      description:
        "Licensed therapists provide chair massages for stress relief. Guests receive stretching tips and referrals to community wellness programs.",
    },
    {
      image: venue,
      title: "🏢 Venue",
      description:
        "Host facility provides accessible indoor space with power, restrooms, and staging areas. Coordination includes floor plan layout, tables/chairs, ADA access, parking/traffic flow, and custodial support; day-before setup is arranged when available.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

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
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 bg-black/60 text-white p-4 text-center rounded-t">
              <h4 className="text-lg font-bold mb-2">{slide.title}</h4>
              <p className="text-sm">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-black px-3 py-1 rounded"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-black px-3 py-1 rounded"
      >
        ›
      </button>

      {/* Optional: Indicators */}
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
