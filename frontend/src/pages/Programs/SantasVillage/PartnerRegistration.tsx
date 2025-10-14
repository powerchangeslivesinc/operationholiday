import React, { useState } from "react";
import PartnerRegistrationLayout from "../../../layout/PartnerRegistrationLayout";
import "bootstrap/dist/css/bootstrap.min.css";
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

  return (
    <PartnerRegistrationLayout>
      {/* Header */}
      <div
        className="text-white d-flex align-items-center justify-content-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "20vh",
        }}
      >
        <h1 className="display-5 text-center fw-bold">
          Partner Registration - Operation Holiday at Home®
        </h1>
      </div>

      <div
        style={{
          background:
            "linear-gradient(to right, rgba(202, 243, 255, 0.6) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(202,243,255,0.6) 100%)",
        }}
      >
        <div className="container pt-4 px-5 bg-white">
          <p>
            Partner organizations help expand the reach of Operation Holiday® by
            collaborating with us to bring resources and holiday cheer to
            families. Use this form to register your organization as a partner
            and indicate your areas of support.
          </p>

          <p>
            Partners may select ticket categories to commit to specific services
            such as family support, community outreach, or senior services. Once
            registered, partners will be contacted by our team to confirm
            participation and finalize your role at Santa’s Village.
          </p>

          <br />
          <p>Here is a list of all the different partner services we offer!</p>
          <br />
          <h1 className="ticket-title">Partner Registration Form</h1>

          <form
            className={`row g-3 needs-validation ${
              validated ? "was-validated" : ""
            }`}
            noValidate
            onSubmit={handleSubmit}
          >
            <h2 className="text-base/7 font-semibold ticket-des">
              Register yourself as a partner
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">
              We just need a handful of details from you.
            </p>

            {/* Order # and Date */}
            <div className="col-md-6">
              <label htmlFor="order" className="form-label">
                Order #
              </label>
              <input id="order" className="form-control" required />
              <div className="invalid-feedback">Only digits are accepted.</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="order_date" className="form-label">
                Order Date
              </label>
              <input
                id="order_date"
                className="form-control"
                type="date"
                required
              />
              <div className="invalid-feedback">Please enter a valid date.</div>
            </div>

            {/* Personal Info */}
            <div className="col-md-6">
              <label htmlFor="first_name" className="form-label">
                First Name
              </label>
              <input id="first_name" className="form-control" required />
              <div className="invalid-feedback">First Name is required.</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="last_name" className="form-label">
                Last Name
              </label>
              <input id="last_name" className="form-control" required />
              <div className="invalid-feedback">Last Name is required.</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="company" className="form-label">
                Company/Organization Name
              </label>
              <input id="company" className="form-control" required />
              <div className="invalid-feedback">Company Name is required.</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="position" className="form-label">
                Title / Position
              </label>
              <input id="position" className="form-control" required />
              <div className="invalid-feedback">Position is required.</div>
            </div>

            {/* Address */}
            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Street Address
              </label>
              <input id="address" className="form-control" required />
              <div className="invalid-feedback">
                Street Address is required.
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="City" className="form-label">
                City
              </label>
              <input id="City" className="form-control" required />
              <div className="invalid-feedback">City is required.</div>
            </div>

            <div className="col-md-3">
              <label htmlFor="State" className="form-label">
                State
              </label>
              <input id="State" className="form-control" required />
              <div className="invalid-feedback">State is required.</div>
            </div>

            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">
                Zip Code
              </label>
              <input
                id="zip"
                className="form-control"
                required
                pattern="^\d{5}$"
              />
              <div className="invalid-feedback">
                Enter a valid 5-digit Zip Code.
              </div>
            </div>

            {/* Website & Contact */}
            <div className="col-md-6">
              <label htmlFor="website" className="form-label">
                Company Website
              </label>
              <input id="website" className="form-control" type="url" />
              <div className="invalid-feedback">Website is required.</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input id="email" className="form-control" type="email" required />
              <div className="invalid-feedback">Email is required.</div>
            </div>

            <div className="col-md-6">
              <label htmlFor="company_phone" className="form-label">
                Company Phone
              </label>
              <input id="company_phone" className="form-control" required />
              <div className="invalid-feedback">
                Company phone number is required.
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="cell_phone" className="form-label">
                Cell Phone
              </label>
              <input id="cell_phone" className="form-control" required />
              <div className="invalid-feedback">Cell phone is required.</div>
            </div>

            {/* Ticket Type Dropdown */}
            <div className="col-md-6">
              <label htmlFor="ticket_type" className="form-label">
                Ticket Type
              </label>
              <select id="ticket_type" className="form-select" required>
                <option value="">-- Select Ticket Type --</option>
                {[
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
                ].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="invalid-feedback">
                Please select a ticket type.
              </div>
            </div>

            {/* Quantity */}
            <div className="col-md-6">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                id="quantity"
                className="form-control"
                type="number"
                min="1"
                required
              />
              <div className="invalid-feedback">Quantity is required.</div>
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
                label: "Do you require privacy screening for your clients?",
              },
              {
                id: "special_accommodation",
                label:
                  "Do you require any special accommodations to provide service to your clients?",
              },
            ].map((field) => (
              <div key={field.id} className="col-md-6">
                <label className="form-label">{field.label}</label>
                <div>
                  <label className="me-3">
                    <input
                      type="radio"
                      name={field.id}
                      value="1"
                      required
                      className="me-1"
                    />{" "}
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={field.id}
                      value="0"
                      className="me-1"
                    />{" "}
                    No
                  </label>
                </div>
                <div className="invalid-feedback">Response is required.</div>
              </div>
            ))}

            {/* Special Accommodation Input */}
            <div className="col-md-6">
              <label
                htmlFor="special_accommodation_input"
                className="form-label"
              >
                What special accommodations do you require? If none, write
                "none".
              </label>
              <input
                id="special_accommodation_input"
                className="form-control"
                type="text"
              />
            </div>

            {/* Submit */}
            <div className="col-12 d-flex justify-content-center mt-5">
              <button type="submit" className="btn btn-danger w-25 py-2 fs-5">
                Submit
              </button>
            </div>
          </form>

          {/* Footer Note */}
          <div className="col-12 mt-5 text-center">
            <h5>
              The Directory is given out at the event. Please email a copy of
              your organization's advertisement and logo to:{" "}
              <strong>ads@operationholiday.net</strong>
            </h5>
          </div>
        </div>
      </div>
    </PartnerRegistrationLayout>
  );
};

export default PartnerRegistration;
