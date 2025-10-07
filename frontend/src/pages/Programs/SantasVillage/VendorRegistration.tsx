import VendorCarousel from "../../../components/VendorCarousel";

export default function VendorRegistration() {
  return (
    <>
      <div className="flex items-center justify-center text-white my-8">
        <h1 className="text-center text-3xl font-bold">
          🎅 Vendor Registration – Santa's Village® 🤶
        </h1>
      </div>

      <div className="max-w-4xl mx-auto my-8">
        <p className="mb-6 text-lg">
          Vendors bring specialized goods, services, or skills to Santa’s
          Village. Use this form to apply as a vendor and indicate which ticket
          categories you would like to support. Vendors may include health
          professionals, stylists, artisans, counselors, or other service
          providers. By registering, you pledge to provide those services
          on-site during Santa’s Village. Our team will confirm your
          application, provide booth setup instructions, and coordinate your
          placement based on the tickets you selected. Vendor participation not
          only showcases your expertise but also directly supports families in
          need by offering real, tangible aid during the holidays.
        </p>

        {/* Our new carousel */}
        <VendorCarousel />
      </div>

      <div className="flex justify-center my-10">
        <a
          href="{{ route('programs.santas.vendor.application') }}"
          className="bg-red-600 hover:bg-red-700 !text-white px-8 py-3 text-lg font-semibold rounded"
        >
          Apply
        </a>
      </div>
    </>
  );
}
