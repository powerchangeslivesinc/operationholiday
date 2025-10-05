import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/AboutUs/Contact";
import Leadership from "./pages/AboutUs/Leadership";
import Giving from "./pages/Donate/Giving";
import Toys from "./pages/Donate/Toys";
import Gallery from "./pages/Programs/MrsClaus/Gallery";
import MeetMrsClaus from "./pages/Programs/MrsClaus/MeetMrsClaus";
import Applicants from "./pages/Programs/OperationHolidayAtHome/Applicants";
import Donors from "./pages/Programs/OperationHolidayAtHome/Donors";
import FAQs from "./pages/Programs/OperationHolidayAtHome/FAQs";
import PartnerRegistration from "./pages/Programs/SantasVillage/PartnerRegistration";
import Tickets from "./pages/Programs/SantasVillage/Tickets";
import VendorRegistration from "./pages/Programs/SantasVillage/VendorRegistration";
import Volunteer from "./pages/Volunteer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* About Us */}
          <Route path="/about/contact" element={<Contact />} />
          <Route path="/about/leadership" element={<Leadership />} />

          {/* Donate */}
          <Route path="/donate/giving" element={<Giving />} />
          <Route path="/donate/toys" element={<Toys />} />

          {/* Programs - Mrs Claus */}
          <Route path="/programs/mrsclaus/gallery" element={<Gallery />} />
          <Route path="/programs/mrsclaus/meet" element={<MeetMrsClaus />} />

          {/* Programs - Operation Holiday At Home */}
          <Route path="/programs/holidayathome/applicants" element={<Applicants />} />
          <Route path="/programs/holidayathome/donors" element={<Donors />} />
          <Route path="/programs/holidayathome/faqs" element={<FAQs />} />

          {/* Programs - Santa’s Village */}
          <Route path="/programs/santasvillage/partners" element={<PartnerRegistration />} />
          <Route path="/programs/santasvillage/tickets" element={<Tickets />} />
          <Route path="/programs/santasvillage/vendors" element={<VendorRegistration />} />

          {/* Volunteer */}
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
