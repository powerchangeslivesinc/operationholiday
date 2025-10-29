import { Link } from "react-router-dom";
import headerImg from "../../../assets/images/applicant-imgs/trees-bg-header-applicants.webp"
import bgImg from "../../../assets/images/applicant-imgs/snowy-bg-applicants.webp"

export default function Applicants() {
  return (
    <>
      {/* Header Section */}
      <header>
        <div
          className="text-white flex items-center justify-center"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url(${headerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "15vh",
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            💖 Applicants – Operation Holiday at Home®
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div
        className=""
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.75)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main>
          <div className="mx-auto w-3/4">
            <div className="mx-auto pt-6 px-4">
              <p className="mb-6 text-sm md:text-base">
                Operation Holiday® at Home connects generous neighbors with New
                Jersey households facing a tough season, so every family can
                experience dignity, joy, and relief at Christmas. Through
                personalized wish lists and anonymous “adoptions,” donors
                provide gifts and essentials that truly meet each household’s
                needs—reducing holiday stress, restoring hope, and reminding
                people that they are seen and cared for.
              </p>
              <hr className="border-gray-300 my-4" />

              <h5 className="text-lg font-semibold">
                We will accept up to 150 eligible, approved applicants
                statewide. This opportunity is open to all New Jersey residents
                in every county, including:
              </h5>

              <ul className="mt-3 pl-4 space-y-1 list-none">
                <li className="-indent-4">✔️ Individuals (adults 18+)</li>
                <li className="-indent-4">✔️ Seniors</li>
                <li className="-indent-4">
                  ✔️ People experiencing homelessness
                </li>
                <li className="-indent-4">
                  ✔️ One-parent households (each child up to age 18, plus the
                  adult head of household)
                </li>
                <li className="-indent-4">
                  ✔️ Two-parent households (each child up to age 18, plus the
                  adult heads of household)
                </li>
              </ul>
              <hr className="border-gray-300 my-6" />

              <h4 className="text-xl font-semibold mb-2">Your Wish List</h4>
              <p className="mb-6 text-sm md:text-base">
                Each applicant will submit a wish list for{" "}
                <strong>every household member</strong>. You may request gift
                cards to stores.
                <br />
                <strong>❌ Prohibited items:</strong> cash and jewelry. Please
                be specific about sizes, colors, and meaningful preferences so
                donors can shop accurately.
              </p>
              <hr className="border-gray-300 my-6" />

              <h4 className="text-xl font-semibold mb-2">Tell Your Story</h4>
              <p className="mb-6 text-sm md:text-base">
                Along with your wish list, include a brief, heartfelt
                explanation of{" "}
                <strong>
                  why you or your family should be chosen to be adopted this
                  Christmas.
                </strong>{" "}
                This story is shared with potential donors to help them
                understand your situation and give with compassion.
              </p>
              <hr className="border-gray-300 my-6" />

              <h4 className="text-xl font-semibold mb-2">
                What Happens If You’re Accepted
              </h4>
              <p className="mb-4 text-sm md:text-base">
                If your application is approved, we will assign a{" "}
                <strong>Family Identification Number</strong> (your name will be
                masked for privacy). On our site, your Family ID will display
                with a <strong>Christmas gift-box icon</strong>. When clicked,
                it will reveal:
              </p>

              <ul className="mb-6 list-none space-y-1">
                <li className="-indent-4">
                  ✔️ Your background summary (as provided)
                </li>
                <li className="-indent-4">✔️ Family size</li>
                <li className="-indent-4">✔️ Ages and clothing/shoe sizes</li>
                <li className="-indent-4">
                  ✔️ Detailed wish lists for each child, the head of household,
                  and any adult members.
                </li>
              </ul>
              <hr className="border-gray-300 my-6" />

              <h4 className="text-xl font-semibold mb-2">
                Deadline & Selection
              </h4>
              <p className="mb-4 text-sm md:text-base">
                Applications are due by{" "}
                <strong>October 31, 2025 at 11:59 PM</strong>, or{" "}
                <strong>earlier if 150 applications are accepted</strong>,
                unless we extend the deadline. Submission does not guarantee
                selection; we reserve the right to determine eligibility and may
                contact you for clarification.
              </p>

              <p className="mb-6 text-sm md:text-base">
                For more information before you apply, please read our{" "}
                <a
                  href="/programs/holiday/faq"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  <strong>Frequently Asked Questions (FAQ)</strong>
                </a>
                . We’re honored to serve you and grateful to our donors who help
                make Operation Holiday® at Home possible.
              </p>
              <hr className="border-gray-300 my-6" />
            </div>

            {/* Apply Button */}
            <div
              className="w-full flex justify-center my-8"
              style={{ height: "3.5em" }}
            >
              <Link
                to="/programs/holiday/application"
                className="w-1/4 bg-red-600 hover:bg-red-700 !text-white text-lg font-semibold pt-3 px-4 rounded-lg text-center transition"
              >
                Apply
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
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
}
