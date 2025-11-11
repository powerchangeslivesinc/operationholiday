import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import headerImg from "../assets/images/home-imgs/header.png";
import bgImg from "../assets/images/home-imgs/bg.png";

interface Applicant {
  _id: string;
  full_name: string;
  city: string;
  state: string;
  adoption_status: string;
}

const Home: React.FC = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/applicants");
        const data = await res.json(); // ✅ must call .json() to parse
        setApplicants(data);
      } catch (error) {
        console.error("Error fetching applicants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);

  return (
    <>
      {/* ---------- HEADER SECTION ---------- */}
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url(${headerImg})`,
          backgroundPosition: "center",
        }}
      >
        <div className="relative isolate px-6 pt-10 lg:px-8">
          <div className="mx-auto max-w-2xl pb-10">
            <div className="text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-white">
                Operation Holiday
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-white">
                Community-powered giving that restores dignity and joy. <br />{" "}
                <br />
                We match donors with local families through private, needs-based
                adoptions, so wish lists become real smiles without sacrificing
                privacy.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-green-700 px-3.5 py-2.5 text-md font-semibold !text-white shadow-xs hover:bg-green-900"
                >
                  Donate
                </a>
                <a
                  href="#"
                  className="rounded-md bg-red-700 px-3.5 py-2.5 text-md font-semibold !text-white shadow-xs hover:bg-red-900"
                >
                  Adopt a Family
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- MAIN CONTENT ---------- */}
      <div
        style={{
          background: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)),
            url(${bgImg})`,
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto">
          {/* Programs Section */}
          <section className="container max-w-7xl mx-auto mb-25 pt-25">
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                to="/programs/holidayathome/applicants"
                className="no-underline"
              >
                <div className="rounded-lg p-[2px] bg-gradient-to-r from-green-500 to-red-500">
                  <div className="bg-white rounded-lg shadow p-6 text-center h-full transition hover:shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">
                      🆘 Need Assistance?
                    </h3>
                    <p className="mb-0 text-gray-500">
                      Apply for Operation Holiday at Home →
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="/programs/santasvillage/vendors">
                <div className="rounded-lg p-[2px] bg-gradient-to-r from-green-500 to-red-500">
                  <div className="bg-white shadow p-6 text-center h-full rounded-lg transition hover:shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">
                      🤶 Vendors &amp; Partners
                    </h3>
                    <p className="mb-0 text-gray-500">
                      Register for the Christmas Extravaganza →
                    </p>
                  </div>
                </div>
              </Link>

              <Link to="/programs/holidayathome/faqs">
                <div className="rounded-lg p-[2px] bg-gradient-to-r from-green-500 to-red-500">
                  <div className="bg-white shadow p-6 text-center h-full rounded-lg transition hover:shadow-md">
                    <h3 className="mb-2 text-xl font-semibold">❓ Questions?</h3>
                    <p className="mb-0 text-gray-500">Read our FAQs →</p>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          <hr className="mx-auto h-1 w-1/3 border-0 bg-gradient-to-r from-white via-green-900 to-white" />

          {/* ---------- TIMELINE SECTION ---------- */}
          <section className="my-10">
            <dl className="max-w-7xl space-y-8 text-lg text-black mx-auto mb-25">
              <h1 className="text-3xl font-semibold text-center mb-15">
                Timeline
              </h1>
              {/* timeline boxes omitted for brevity */}
            </dl>
          </section>

          <hr className="mx-auto h-1 w-1/3 border-0 bg-gradient-to-r from-white via-red-900 to-white" />

          {/* ---------- ADOPTIONS SECTION ---------- */}
          <section className="my-25">
            <h1 className="mb-2 text-3xl font-semibold pb-5 text-center">
              Families Available for Adoption
            </h1>

            {loading ? (
              <p className="text-center text-gray-600">Loading applicants...</p>
            ) : applicants.length === 0 ? (
              <p className="text-center text-gray-500">
                No families currently listed.
              </p>
            ) : (
              <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
                {applicants.map((applicant) => (
                  <div
                    key={applicant._id}
                    className="bg-white rounded-lg shadow-md p-5 text-center border border-gray-100 hover:shadow-lg transition"
                  >
                    <h2 className="text-xl font-semibold mb-1">
                      {applicant.full_name}
                    </h2>
                    <p className="text-gray-600 mb-2">
                      {applicant.city}, {applicant.state}
                    </p>
                    <span
                      className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
                        applicant.adoption_status === "adopted"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {applicant.adoption_status === "adopted"
                        ? "Adopted"
                        : "Up for Adoption"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          <hr className="mx-auto h-1 w-1/3 border-0 bg-gradient-to-r from-white via-green-900 to-white" />

          {/* ---------- EVENTS SECTION ---------- */}
          <section className="mt-25 pb-25">
            <h1 className="mb-2 text-3xl font-semibold pb-5 text-center">
              Events
            </h1>
            <div className="flex justify-center gap-5">
              <ProductCard productId={"2"} title={"PPP"} />
              <ProductCard productId={"2"} title={"PPP"} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
