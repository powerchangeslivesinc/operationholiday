// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState<null | "programs" | "about" | "donate">(null);

  return (
    <header className="relative z-50">
      {/* Top header row laid out in 6 columns to mirror your image */}
      <div className="bg-black text-white border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-6 items-center gap-4 py-3">
            {/* 1. HOME (col 1) */}
            <div className="col-span-1">
              <Link to="/" className="block text-sm font-bold tracking-wider">HOME</Link>
            </div>

            {/* 2. PROGRAMS (col 2) */}
            <div className="col-span-1">
              <button
                onClick={() => setOpen(open === "programs" ? null : "programs")}
                className="text-sm font-bold uppercase"
              >
                PROGRAMS
              </button>
            </div>

            {/* 3. big center spacer (col 3) */}
            <div className="col-span-2" />

            {/* 4. VOLUNTEER (col 4) */}
            <div className="col-span-1 text-center">
              <Link to="/volunteer" className="text-sm font-bold uppercase">VOLUNTEER</Link>
            </div>

            {/* 5. ABOUT US (col 5) */}
            <div className="col-span-1">
              <button
                onClick={() => setOpen(open === "about" ? null : "about")}
                className="text-sm font-bold uppercase"
              >
                ABOUT US
              </button>
            </div>

            {/* 6. DONATE (aligned visually to extreme right - we'll place link under same column area) */}
            {/* Note: grid is 6 cols, donate link visually on right side. */}
          </div>
        </div>
      </div>

      {/* MEGA AREA: PROGRAMS - spans full width but content is arranged to match image columns */}
      {open === "programs" && (
        <div className="absolute left-0 right-0 top-full bg-gray-900 text-white border-t border-gray-700 shadow-lg">
          <div className="container mx-auto px-4 py-6">
            {/* Use grid with 6 columns so we can create the same column ordering */}
            <div className="grid grid-cols-6 gap-6">
              {/* Column 1 - leftmost (matches big empty space under HOME in image) */}
              <div className="col-span-1" />

              {/* Column 2 - Operation Holiday at Home (bold header) */}
              <div className="col-span-1">
                <div className="bg-black px-3 py-2 font-bold rounded text-white">Operation Holiday at Home</div>
                <ul className="mt-4 space-y-2">
                  <li><Link to="/programs/holidayathome/applicants" className="block px-1 py-1 hover:underline">Applicants</Link></li>
                  <li><Link to="/programs/holidayathome/donors" className="block px-1 py-1 hover:underline">Donors (Adoptions)</Link></li>
                  <li><Link to="/programs/holidayathome/faqs" className="block px-1 py-1 hover:underline">Frequently Asked Questions (FAQs)</Link></li>
                </ul>
              </div>

              {/* Column 3 - Santa's Village column (middle area) */}
              <div className="col-span-1">
                <div className="bg-black px-3 py-2 font-bold rounded text-white">Santa’s Village</div>
                <ul className="mt-4 space-y-2">
                  <li><Link to="/programs/santasvillage/tickets" className="block px-1 py-1 hover:underline">Tickets</Link></li>
                  <li><Link to="/programs/santasvillage/partner-registration" className="block px-1 py-1 hover:underline">Partner Registration</Link></li>
                  <li><Link to="/programs/santasvillage/vendor-registration" className="block px-1 py-1 hover:underline">Vendor Registration</Link></li>
                </ul>
              </div>

              {/* Column 4 - Mrs. Claus and related (small right-of-center) */}
              <div className="col-span-1">
                <div className="bg-black px-3 py-2 font-bold rounded text-white">Mrs. Claus</div>
                <ul className="mt-4 space-y-2">
                  <li><Link to="/programs/mrsclaus/meet" className="block px-1 py-1 hover:underline">Meet Mrs. Claus</Link></li>
                  <li><Link to="/programs/mrsclaus/gallery" className="block px-1 py-1 hover:underline">Gallery</Link></li>
                </ul>
              </div>

              {/* Column 5 - Volunteer registration area aligned under VOLUNTEER header */}
              <div className="col-span-1">
                <div className="bg-black px-3 py-2 font-bold rounded text-white">Volunteer</div>
                <ul className="mt-4 space-y-2">
                  <li><Link to="/volunteer" className="block px-1 py-1 hover:underline">Volunteer Registration</Link></li>
                </ul>
              </div>

              {/* Column 6 - About & Donate area aligned under rightmost headers */}
              <div className="col-span-1">
                <div className="bg-black px-3 py-2 font-bold rounded text-white">About / Donate</div>
                <ul className="mt-4 space-y-2">
                  <li><Link to="/about/contact" className="block px-1 py-1 hover:underline">Contact Us</Link></li>
                  <li><Link to="/about/leadership" className="block px-1 py-1 hover:underline">Our Leadership</Link></li>
                  <li><Link to="/donate/giving" className="block px-1 py-1 hover:underline">Giving</Link></li>
                  <li><Link to="/donate/toys" className="block px-1 py-1 hover:underline">Toys</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT / DONATE small dropdowns (simple) */}
      {open === "about" && (
        <div className="absolute left-0 top-full right-0 bg-gray-900 border-t border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <div className="flex gap-6">
              <Link to="/about/contact" className="px-2 py-1 hover:underline">Contact</Link>
              <Link to="/about/leadership" className="px-2 py-1 hover:underline">Leadership</Link>
            </div>
          </div>
        </div>
      )}

      {open === "donate" && (
        <div className="absolute left-0 top-full right-0 bg-gray-900 border-t border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <div className="flex gap-6">
              <Link to="/donate/giving" className="px-2 py-1 hover:underline">Giving</Link>
              <Link to="/donate/toys" className="px-2 py-1 hover:underline">Toys</Link>
            </div>
          </div>
        </div>
      )}

      {/* click-outside behavior: clicking anywhere in the document won't be handled here,
          but you can add a global click listener if you want to close menus on outside click. */}
    </header>
  );
}
