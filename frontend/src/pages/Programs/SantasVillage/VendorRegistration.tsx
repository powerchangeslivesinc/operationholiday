import VendorCarousel from "../../../components/Carousel";

import art from "/vendor-imgs/art.webp";
import stylist from "/vendor-imgs/stylist.webp";
import choir from "/vendor-imgs/choir.webp";
import communications from "/vendor-imgs/communications.webp";
import dj from "/vendor-imgs/dj.webp";
import food from "/vendor-imgs/food_service.webp";
import makeup from "/vendor-imgs/makeup_artist.webp";
import massage from "/vendor-imgs/massage.webp";
import venue from "/vendor-imgs/venue.webp";

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

export default function VendorRegistration() {
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
            🎅 Vendor Registration – Santa's Village® 🤶
          </h1>
        </div>
      </header>

      <div
        className="pt-1"
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.75)), url('/snowy-bg-applicants.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-4/5 mx-auto my-8">
          <p className="mb-6 text-lg">
            Vendors bring specialized goods, services, or skills to Santa’s
            Village. Use this form to apply as a vendor and indicate which
            ticket categories you would like to support. Vendors may include
            health professionals, stylists, artisans, counselors, or other
            service providers. By registering, you pledge to provide those
            services on-site during Santa’s Village. Our team will confirm your
            application, provide booth setup instructions, and coordinate your
            placement based on the tickets you selected. Vendor participation
            not only showcases your expertise but also directly supports
            families in need by offering real, tangible aid during the holidays.
          </p>

          <hr />

          <VendorCarousel slides={slides} />

          <hr />
        </div>

        <div className="flex justify-center my-10">
          <a
            href="{{ route('programs.santas.vendor.application') }}"
            className="bg-red-600 hover:bg-red-700 !text-white px-25 py-3 text-lg font-semibold rounded"
          >
            Apply
          </a>
        </div>
      </div>
    </>
  );
}