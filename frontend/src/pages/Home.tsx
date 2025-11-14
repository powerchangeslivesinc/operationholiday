import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import headerImg from "../assets/images/home-imgs/header.png";
import bgImg from "../assets/images/home-imgs/bg.png";
import FamilyList from "../components/FamilyList";

export default function Home() {
  return (
    <>
      <div
        className=""
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
                  className="rounded-md bg-green-700 px-3.5 py-2.5 text-md font-semibold !text-white shadow-xs hover:bg-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Donate
                </a>
                <a
                  href="#"
                  className="rounded-md bg-red-700 px-3.5 py-2.5 text-md font-semibold !text-white shadow-xs hover:bg-red-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Adopt a Family
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className=""
        style={{
          background: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)),
            url(${bgImg})`,
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto">
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
                    <h3 className="mb-2 text-xl font-semibold">
                      ❓ Questions?
                    </h3>
                    <p className="mb-0 text-gray-500">Read our FAQs →</p>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          <hr className="mx-auto h-1 w-1/3 border-0 bg-gradient-to-r from-white via-green-900 to-white" />

          <section className="my-10">
            <dl className="max-w-7xl space-y-8 text-lg text-black mx-auto mb-25">
              <h1 className="text-3xl font-semibold text-center mb-15">
                Timeline
              </h1>
              <div className="grid justify-evenly gap-6 md:grid-cols-3">
                <div className="relative px-7 py-4 bg-white rounded-lg shadow-lg">
                  <dt className="inline font-semibold text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 25 25"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-slot="icon"
                      aria-hidden="true"
                      className="absolute top-1 left-1 size-5"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                      <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                    </svg>
                    Sept 30
                  </dt>
                  <dd className="inline">
                    <br />
                    Applications Open <br />
                    Adopt a Family Applications Open.
                  </dd>
                </div>

                <div className="relative px-7 py-4 bg-white rounded-lg shadow-lg">
                  <dt className="inline font-semibold text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      data-slot="icon"
                      aria-hidden="true"
                      className="absolute top-1 left-1 size-5"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                      <path d="M14 3v5h5M9.9 17.1L14 13M9.9 12.9L14 17" />
                    </svg>
                    Oct 31
                  </dt>
                  <dd className="inline">
                    <br />
                    Applications Close <br />
                    Adopt a Family Applications Close.
                  </dd>
                </div>

                <div className="relative px-7 py-4 bg-white rounded-lg shadow-lg">
                  <dt className="inline font-semibold text-black">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-slot="icon"
                      aria-hidden="true"
                      className="absolute top-1 left-1 size-5"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M5 12.0002C5 10.694 4.16519 9.58273 3 9.1709V7.6C3 7.03995 3 6.75992 3.10899 6.54601C3.20487 6.35785 3.35785 6.20487 3.54601 6.10899C3.75992 6 4.03995 6 4.6 6H19.4C19.9601 6 20.2401 6 20.454 6.10899C20.6422 6.20487 20.7951 6.35785 20.891 6.54601C21 6.75992 21 7.03995 21 7.6V9.17071C19.8348 9.58254 19 10.694 19 12.0002C19 13.3064 19.8348 14.4175 21 14.8293V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H4.6C4.03995 18 3.75992 18 3.54601 17.891C3.35785 17.7951 3.20487 17.6422 3.10899 17.454C3 17.2401 3 16.9601 3 16.4V14.8295C4.16519 14.4177 5 13.3064 5 12.0002Z"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    Dec 31
                  </dt>
                  <dd className="inline">
                    <br />
                    Christmas Extravaganza Tickets <br />
                    Tickets Available to Purchase
                  </dd>
                </div>
              </div>
            </dl>
          </section>

          <hr className="mx-auto h-1 w-1/3 border-0 bg-gradient-to-r from-white via-red-900 to-white" />

          <section className="my-25">
            <h1 className="mb-2 text-3xl font-semibold pb-5 text-center">
              Adoptions
            </h1>
            <div className="flex gap-5 justify-center">
              <FamilyList limit={3}/>
            </div>
          </section>

          <hr className="mx-auto h-1 w-1/3 border-0 bg-gradient-to-r from-white via-green-900 to-white" />

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
}
