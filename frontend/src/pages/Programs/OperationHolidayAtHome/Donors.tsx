import React from "react";
import AdoptionProcess from "../../../components/AdoptionProcess";
import ProductCard from "../../../components/ProductCard";
import Accordion from "../../../components/Accordion";
import FamilyDetail from "./FamilyDetail";
import FamilyCard from "../../../components/FamilyCard";

export default function Donors() {
  // Example placeholder data
  const products = [
    { productId: "001D", title: "Walmart Charitable Gift Card", price: 20.00, soldOut: false },
    { productId: "title", title: "Kindle 8 Plus Tablet", price: 120.00, soldOut: false },
  ];

  const families = [
    {
      id: 1,
      background:
        "A single parent household with two children, working part-time while attending school.",
      household_size: 3,
      head_of_household: {
        age: 35,
        sex: "Female",
        clothing_size: "M",
        shoe_size: "8",
        wish_list: "Warm coat, grocery gift card",
      },
      members: [
        {
          role: "Child",
          age: 10,
          sex: "Male",
          clothing_size: "S",
          shoe_size: "4",
          wish_list: "Lego set, books, sneakers",
        },
        {
          role: "Child",
          age: 7,
          sex: "Female",
          clothing_size: "XS",
          shoe_size: "2",
          wish_list: "Art supplies, dolls, jacket",
        },
      ],
    },
  ];

  return (
    <>
      {/* Header */}
      <header>
        <div
          className="text-white flex items-center justify-center"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url('/trees-bg-header-applicants.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "20vh",
          }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            🎁 Donors – Operation Holiday at Home®
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-gray-50 py-10">
        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold">ADOPTIONS</h2>
        </section>

        {/* Adoption Process */}
        <section className="max-w-5xl mx-auto mb-10 px-4">
          <AdoptionProcess />
        </section>

        {/* Products Section */}
        <section className="container mx-auto my-8 px-4">
          <h3 className="text-xl font-semibold mb-4">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.productId}
                productId={product.productId}
                title={product.title}
              />
            ))}
          </div>
        </section>

        {/* Families Section */}
        <section className="container mx-auto my-10 px-4">
          <h3 className="text-xl font-semibold mb-4">Available Families</h3>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {families.map((family) => (
              <FamilyCard
                key={family.id}
                familyId={`NJ-2024-00${family.id}`}
                background={family.background}
                adopted={false}
              />
            ))}
          </div>
        </section>

        {/* Donor FAQ Section */}
        <section id="donors" className="container mx-auto my-12 px-4">
          <h2 className="text-2xl font-semibold mb-6">FAQ For Donors</h2>
          <div className="space-y-4">
            <Accordion number={1} question="How do I pick a family to adopt?">
              Browse{" "}
              <a
                href="https://operationholiday.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                OperationHoliday.net
              </a>{" "}
              and review the <strong>gift-box icons</strong>. Click to view each
              family's background, sizes, and wish lists. Select a{" "}
              <strong>Family ID</strong>, add it to your <strong>cart</strong>,
              and <strong>checkout</strong> to pledge your adoption.
            </Accordion>

            <Accordion number={2} question="Can I adopt more than one family?">
              Yes. Add as many Family IDs to your cart as you like and complete
              one checkout to <strong>pledge multiple adoptions</strong>.
            </Accordion>

            <Accordion number={3} question="Do I pay any money today?">
              No. Checkout registers your <strong>pledge</strong>. You spend
              funds when you <strong>purchase and ship</strong> the items or gift
              cards from the family's wish list.
            </Accordion>

            <Accordion
              number={4}
              question="How can I remain anonymous and still adopt?"
            >
              At checkout, choose <strong>Adopt Anonymously</strong> (or notify
              us after pledging). We will mask your identity while still
              coordinating shipping/delivery. You may ship directly or through
              our team.
            </Accordion>
          </div>
        </section>
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
    </>
  );
}