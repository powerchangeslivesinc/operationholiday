import React from "react";

const MrsClaus: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Meet Mrs. Claus</h1>
          <p className="text-lg text-gray-600">
            The heart behind Santa’s Village and Operation Holiday®.
          </p>
        </div>
      </section>

      {/* Bio + Story Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Image */}
          <div>
            <img
              src="/images/mrs-claus.jpg"
              alt="Mrs. Claus"
              className="w-full rounded-lg shadow-md object-cover"
              style={{ aspectRatio: "4 / 3" }}
            />
          </div>

          {/* Right Column - Bio + Story */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Biography</h2>
            <p className="text-gray-700 mb-6">
              Mrs. Claus keeps the workshop humming, organizing volunteers, checking lists twice,
              and making sure every family feels seen and cared for. She champions dignity, joy, and
              practical support throughout the season.
            </p>

            <h3 className="text-xl font-semibold mb-3">Our Story</h3>
            <p className="text-gray-700 mb-6">
              Operation Holiday® connects generous neighbors with New Jersey households facing a
              tough season so families can experience dignity, joy, and relief at Christmas. Through
              personalized wish lists and anonymous adoptions, donors meet real needs and restore
              hope.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {/* Replace with <Link> if using React Router */}
              <a
                href="/programs/mrs/gallery"
                className="px-5 py-2 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 transition"
              >
                View Gallery
              </a>

              <a
                href="/programs/santas/tickets"
                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Visit Santa’s Village
              </a>

              <a
                href="/programs/holiday/adoptions"
                className="px-5 py-2 rounded-lg border border-gray-400 text-gray-600 hover:bg-gray-50 transition"
              >
                Adopt a Family
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MrsClaus;
