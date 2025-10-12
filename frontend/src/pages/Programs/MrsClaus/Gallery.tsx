import art from "/vendor-imgs/art.webp";
import dj from "/vendor-imgs/dj.webp";
import choir from "/vendor-imgs/choir.webp";
import communications from "/vendor-imgs/communications.webp";
import Carousel from "../../../components/Carousel";

const photos = [
  { src: art, caption: "Event Photo 1" },
  { src: dj, caption: "Event Photo 2" },
  { src: choir, caption: "Event Photo 3" },
  { src: communications, caption: "Event Photo 4" },
];

const slides = [
    {
      image: art,
    },
    {
      image: dj,
    },
    {
      image: choir,
    },
    {
      image: communications,
    },
  ];

export default function Gallery() {
  return (
    <>
      <header>
        <div
          className="text-white flex items-center justify-center"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url('/vendor-imgs/vendor-reg.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            height: "15vh",
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            🎅 Gallery – Mrs.Claus® 🤶
          </h1>
        </div>
      </header>

      <Carousel slides={slides} />

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-20">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <div
              key={index}
              className="rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden"
            >
              <img
                src={photo.src}
                alt={photo.caption || "Event Photo"}
                className="w-full h-64 object-cover"
              />
              {photo.caption && (
                <div className="p-2 text-sm text-center text-gray-700">
                  {photo.caption}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-red-500">
            No photos available.
          </p>
        )}
      </div>
      </>
  );
}
