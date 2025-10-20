import React from "react";

const AdoptionProcess: React.FC = () => {
  return (
    <div className="card shadow-sm mb-5 p-6 bg-white rounded-lg">
      <h3 className="text-2xl font-bold text-center mb-6">Applicants</h3>

      <h5 className="text-lg font-semibold mb-2">
        Operation Holiday® at Home — Applicant Introduction
      </h5>
      <p className="mb-4">
        Operation Holiday® at Home connects generous neighbors with New Jersey households
        facing a tough season, so every family can experience dignity, joy, and relief at
        Christmas. Through personalized wish lists and anonymous “adoptions,” donors
        provide gifts and essentials that truly meet each household’s needs—reducing
        holiday stress, restoring hope, and reminding people that they are seen and cared for.
      </p>

      <p className="mb-4">
        We will accept up to{" "}
        <strong>150 eligible, approved applicants statewide.</strong> This opportunity is
        open to all New Jersey residents in every county, including:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Individuals (adults 18+)</li>
        <li>Seniors</li>
        <li>People experiencing homelessness</li>
        <li>
          One-parent households (each child up to age 18, plus the adult head of household)
        </li>
        <li>
          Two-parent households (each child up to age 18, plus the adult heads of household)
        </li>
      </ul>

      <h5 className="text-lg font-semibold mt-6 mb-2">Your Wish List</h5>
      <p className="mb-4">
        Each applicant will submit a wish list for every household member. You may request
        gift cards to stores. <strong>Prohibited items:</strong> cash and jewelry. Please be
        specific about sizes, colors, and meaningful preferences so donors can shop
        accurately.
      </p>

      <h5 className="text-lg font-semibold mt-6 mb-2">Tell Your Story</h5>
      <p className="mb-4">
        Along with your wish list, include a brief, heartfelt explanation of why you or
        your family should be chosen to be adopted this Christmas. This story is shared
        with potential donors to help them understand your situation and give with
        compassion.
      </p>

      <h5 className="text-lg font-semibold mt-6 mb-2">
        What Happens If You’re Accepted
      </h5>
      <p className="mb-4">
        If your application is approved, we will assign a{" "}
        <strong>Family Identification Number</strong> (your name will be masked for
        privacy). On our site, your Family ID will display with a Christmas gift-box icon.
        When clicked, it will reveal:
      </p>

      <ul className="list-disc list-inside mb-4 space-y-1">
        <li>Your background summary (as provided),</li>
        <li>Family size,</li>
        <li>Ages and clothing/shoe sizes,</li>
        <li>
          Detailed wish lists for each child, the head of household, and any adult members.
        </li>
      </ul>

      <h5 className="text-lg font-semibold mt-6 mb-2">Deadline & Selection</h5>
      <p className="mb-4">
        Applications are due by <strong>October 31, 2025 at 11:59 PM</strong>, or earlier
        if 150 applications are accepted, unless we extend the deadline. Submission does not
        guarantee selection; we reserve the right to determine eligibility and may contact
        you for clarification.
      </p>

      <p className="mt-4 text-sm text-gray-600">
        For more information before you apply, please read our Frequently Asked Questions
        (FAQ). We’re honored to serve you and grateful to our donors who help make{" "}
        <em>Operation Holiday® at Home</em> possible.
      </p>
    </div>
  );
};

export default AdoptionProcess;