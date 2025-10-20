import React, { useState } from "react";
import bgImage from "../../../assets/images/partner-registration/christmas-background.jpg";

const PartnerRegistration: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      alert("Form submitted successfully!");
    }
    setValidated(true);
  };

  const ticketTypes = [
    "Aging (Senior) Services",
    "Career & Employment Training",
    "Childcare",
    "Chiropractor",
    "Community Outreach & Client Advocacy",
    "Credit/Financial Planning",
    "Dental Services",
    "Disability Services",
    "Domestic Violence Services",
    "Drop-In Centers",
    "Education",
    "Employer (Job Fair)",
    "ESL (English Second Language)",
    "Family Support",
    "Financial Assistance",
    "Food Pantries & Soup Kitchens",
    "Health & Wellness",
    "Healthcare Coverage",
    "HIV/AIDS Services",
    "Homeownership Assistance",
    "Housing Assistance",
    "Hygiene Services",
    "Immigration Services",
    "Legal Services",
    "LGBTQIA+ Services",
    "Maternal Health",
    "Medicaid Insurance",
    "Medical Services",
    "Medication/Prescription Assistance",
    "Meditation",
    "Mental Health",
    "Optometry (Vision) Services",
    "Pet Therapy",
    "Prayer (Christianity)",
    "Re-Entry Services",
    "Security Deposit/Rent Assistance",
    "Shelters (NJ)",
    "SNAP (Foodstamps)",
    "Social Services",
    "Street Outreach",
    "Thrift Shop",
    "Transportation Services",
    "Utility Assistance",
    "Vaccines",
    "Veterans Affairs Services",
    "Youth Services",
  ];

  return (
    <>
      {/* Header Section — Matches Applicants.tsx */}
      <header>
        <div
          className="text-white flex items-center justify-center"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "15vh",
          }}
        >
          <h1 style={{color:"white"}}className="text-3xl md:text-4xl font-bold text-center ">

             Partner Registration – Operation Holiday at Home®
          </h1>
        </div>
      </header>


      <div
        style={{
          background: `linear-gradient(
            rgba(255, 255, 255, 0.95),
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0.75)
          ), url('/snowy-bg-applicants.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main>
          <div className="mx-auto w-3/4 py-6 px-4">
            {/* Your original content preserved exactly */}
            <div
              className="flex items-center justify-center text-blue-900 mb-8"
              
            >
              <h1 className="text-3xl font-bold text-center">
               🎁 Partner Registration - Operation Holiday at Home®
              </h1>
            </div>

            <div className="max-w-5xl mx-auto p-8 bg-white shadow-md rounded-md">
              <p className="text-gray-700 mb-3">
                Partner organizations help expand the reach of Operation
                Holiday® by collaborating with us to bring resources and holiday
                cheer to families. Use this form to register your organization
                as a partner and indicate your areas of support.
              </p>

              <p className="text-gray-700 mb-6">
                Partners may select ticket categories to commit to specific
                services such as family support, community outreach, or senior
                services. Once registered, partners will be contacted by our
                team to confirm participation and finalize your role at Santa’s
                Village.
              </p>

              <p className="mb-8 text-gray-800 font-medium">
                Here is a list of all the different partner services we offer!
              </p>
              <a
                href="/programs/santasvillage/partners-services"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                View Partner Services →
              </a>

              <h1 className="text-2xl font-bold mb-4 text-center">
                Partner Registration Form
              </h1>

              <form
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
                  validated ? "was-validated" : ""
                }`}
                noValidate
                onSubmit={handleSubmit}
              >
                <h2 className="text-lg font-semibold col-span-2">
                  Register yourself as a partner
                </h2>
                <p className="text-gray-600 col-span-2">
                  We just need a handful of details from you.
                </p>

                {/* Order # and Date */}
                <div>
                  <label htmlFor="order" className="block font-medium mb-1">
                    Order #
                  </label>
                  <input
                    id="order"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="order_date" className="block font-medium mb-1">
                    Order Date
                  </label>
                  <input
                    id="order_date"
                    type="date"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                {/* Personal Info */}
                {[
                  ["first_name", "First Name"],
                  ["last_name", "Last Name"],
                  ["company", "Company/Organization Name"],
                  ["position", "Title / Position"],
                ].map(([id, label]) => (
                  <div key={id}>
                    <label htmlFor={id} className="block font-medium mb-1">
                      {label}
                    </label>
                    <input
                      id={id}
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                ))}

                {/* Address */}
                <div className="col-span-2">
                  <label htmlFor="address" className="block font-medium mb-1">
                    Street Address
                  </label>
                  <input
                    id="address"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="City" className="block font-medium mb-1">
                    City
                  </label>
                  <input
                    id="City"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="State" className="block font-medium mb-1">
                    State
                  </label>
                  <input
                    id="State"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="zip" className="block font-medium mb-1">
                    Zip Code
                  </label>
                  <input
                    id="zip"
                    pattern="^\\d{5}$"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                {/* Website & Contact */}
                {[
                  ["website", "Company Website", "url"],
                  ["email", "Email", "email"],
                  ["company_phone", "Company Phone", "text"],
                  ["cell_phone", "Cell Phone", "text"],
                ].map(([id, label, type]) => (
                  <div key={id}>
                    <label htmlFor={id} className="block font-medium mb-1">
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                      required
                    />
                  </div>
                ))}

                {/* Ticket Type */}
                <div>
                  <label htmlFor="ticket_type" className="block font-medium mb-1">
                    Ticket Type
                  </label>
                  <select
                    id="ticket_type"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    required
                  >
                    <option value="">-- Select Ticket Type --</option>
                    {ticketTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="quantity" className="block font-medium mb-1">
                    Quantity
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                {/* Yes/No Questions */}
                {[
                  {
                    id: "parking_accommodation",
                    label:
                      "Do you require parking accommodations for large vehicles?",
                  },
                  { id: "mobile_services", label: "Van/Truck/Mobile Services" },
                  { id: "wifi", label: "Do you require WiFi?" },
                  {
                    id: "privacy_screening",
                    label:
                      "Do you require privacy screening for your clients?",
                  },
                  {
                    id: "special_accommodation",
                    label:
                      "Do you require any special accommodations to provide service to your clients?",
                  },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block font-medium mb-1">
                      {field.label}
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name={field.id}
                          value="1"
                          required
                          className="accent-blue-500"
                        />
                        Yes
                      </label>
                      <label className="flex items-center gap-1">
                        <input
                          type="radio"
                          name={field.id}
                          value="0"
                          className="accent-blue-500"
                        />
                        No
                      </label>
                    </div>
                  </div>
                ))}

                {/* Special Accommodation Input */}
                <div>
                  <label
                    htmlFor="special_accommodation_input"
                    className="block font-medium mb-1"
                  >
                    What special accommodations do you require? If none, write
                    "none".
                  </label>
                  <input
                    id="special_accommodation_input"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                    type="text"
                  />
                </div>

                {/* Submit */}
                <div className="col-span-2 flex justify-center mt-6">
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition"
                  >
                    Submit
                  </button>
                </div>
              </form>

              {/* Footer Note */}
              <div className="mt-10 text-center">
                <h5 className="text-gray-700">
                  The Directory is given out at the event. Please email a copy of
                  your organization's advertisement and logo to:{" "}
                  <strong>ads@operationholiday.net</strong>
                </h5>
              </div>
            </div>
          </div>
        </main>

        {/* Footer — Matches Applicants.tsx */}
        <footer className="w-full mx-auto px-4 py-4 text-sm text-gray-700 flex justify-evenly">
          <p>
            © 2017–2025 Company, Inc. ·{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy
            </a>{" "}
            ·{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms
            </a>
          </p>

          <p className="text-right">
            <a href="#" className="text-blue-600 hover:underline">
              Back to top
            </a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default PartnerRegistration;


