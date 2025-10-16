export default function FAQs() {
  return (
    <div className="container my-5">
      <h1 className="mb-4 text-2xl font-bold">
        Operation Holiday® at Home - Frequently Asked Questions (FAQs)
      </h1>

      <form id="faq-search-form" className="flex mb-4" role="search">
        <input
          id="faq-search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
          className="form-control me-2"
        />
        <button type="submit" className="btn btn-lg btn-outline-success">
          Search
        </button>
      </form>

      {/* For Applicants */}
      <section id="applicants" className="faq-section mb-4">
        <h2 className="mb-4 text-xl font-semibold">For Applicants</h2>

        <div className="faq-item mb-2">
          <h3 className="font-semibold">1. What areas do you cover?</h3>
          <p>
            We serve <strong>all counties in New Jersey</strong>. Applicants
            must provide a New Jersey mailing address (or current
            shelter/program location if unhoused).
          </p>
        </div>

        <div className="faq-item mb-2">
          <h3 className="font-semibold">2. Who can be included on my application?</h3>
          <p>Your <strong>entire household</strong>:</p>
          <ul className="ps-3 list-disc">
            <li>The <strong>head of household</strong> (age 18+)</li>
            <li>Any other <strong>adult household members</strong></li>
            <li><strong>Children up to age 18</strong> who live with you</li>
            <li className="info">Only <strong>one application per household</strong></li>
          </ul>
        </div>

        <div className="faq-item mb-2">
          <h3 className="font-semibold">3. If I'm adopted, how will I be notified?</h3>
          <p>When a donor selects your Family ID on our website, our team:</p>
          <ol className="ps-3 list-decimal">
            <li>Verifies the donor's pledge and readiness to purchase items on your wish list</li>
            <li>Marks your status as "<strong>Adopted</strong>"</li>
            <li>Sends you an <strong>email notification</strong> with next steps</li>
            <li className="info">
              If the donor chooses to remain anonymous, we will not share their name. If not, we'll include it in your notice.
            </li>
          </ol>
        </div>

        {/* Continue the rest of applicant FAQs similarly */}
      </section>

      {/* For Donors */}
      <section id="donors" className="faq-section mt-4">
        <h2 className="mb-4 text-xl font-semibold">For Donors (Adoptions)</h2>

        <div className="faq-item mb-2">
          <h3 className="font-semibold">1. How do I pick a family to adopt?</h3>
          <p>
            Browse OperationHoliday.net and review the <strong>gift-box icons</strong>. Click to view the family's background, sizes, and wish lists. Select a <strong>Family ID</strong>, add it to your <strong>cart</strong>, and <strong>checkout</strong> to pledge your adoption.
          </p>
        </div>

        <div className="faq-item mb-2">
          <h3 className="font-semibold">2. Can I adopt more than one family?</h3>
          <p>
            Yes. Add as many Family IDs to your cart as you like and complete one checkout to <strong>pledge multiple adoptions</strong>.
          </p>
        </div>

        <div className="faq-item mb-2">
          <h3 className="font-semibold">3. Do I pay any money today?</h3>
          <p>
            No. Checkout registers your <strong>pledge</strong>. You spend funds when you <strong>purchase and ship</strong> the items or gift cards from the family's wish list.
          </p>
        </div>

        <div className="faq-item mb-2">
          <h3 className="font-semibold">4. How can I remain anonymous and still adopt?</h3>
          <p>
            At checkout, choose <strong>Adopt Anonymously</strong> (or notify us after pledging). We will mask your identity to the applicant while still coordinating shipping/delivery. You may ship directly or through our team.
          </p>
        </div>
      </section>
    </div>
  );
}