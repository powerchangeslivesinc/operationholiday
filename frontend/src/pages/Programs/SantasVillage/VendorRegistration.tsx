import VendorCarousel from "../../../components/VendorCarousel";

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
            height: "20vh",
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            🎅 Vendor Registration – Santa's Village® 🤶
          </h1>
        </div>
      </header>

      <div
        className=""
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

          <VendorCarousel />

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