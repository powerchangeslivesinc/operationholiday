import React from "react";
import AppLayout from "../../../layout/AppLayout";
import familyImage from "../../../assets/images/tickets/family.png";
//import christmasEndImage from "../../../assets/images/tickets/christmas-end.jpg";
import christmasImage from "../../../assets/images/tickets/christmas.png";


const Tickets: React.FC = () => {
  return (
    <AppLayout>
      {/* Inline Page Styles */}
      
      <style>{`
        body {
          text-align: center;
        }
        h2 {
          color: rgb(213, 19, 19);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: bold;
        }
        #red {
          color: rgb(213, 19, 19);
          font-weight: bold;
        }
        #green {
          color: rgb(14, 90, 14);
          font-weight: bold;
        }
        p {
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
            'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        }
        img {
          display: block;
          margin: 0 auto;
          height: auto;
        }
        #end-img {
          width: 350px;
        }
      `}</style>

      {/* Page Content */}
       <div
        className=""
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.75)), url('/snowy-bg-applicants.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="min-h-screen font-sans">
        <div className="container mx-auto px-6 py-12">
          <img
            src={familyImage}
            alt="Family Christmas"
            className="max-w-xs md:max-w-md lg:max-w-lg h-auto"
          />
          <br />
          <h2 className="text-4xl">🎟️ Tickets – Christmas Extravaganza</h2>
          <br />
          <p>
            Operation Holiday’s <b id="red">Christmas Extravaganza</b> is the
            highlight of the season — a day filled with joy, music, free
            services, food, entertainment, and the distribution of thousands of
            toys. Admission is completely free, but tickets are required for
            entry to help us safely plan for all guests.
            <br />
            <br />
            <b id="green">✨ Important Dates</b>
            <br />
            <br />
            <b>New OperationHoliday.net site goes live:</b> September 30, 2025
            <br />
            <b>Adopt-a-Family (OH at Home) applications open:</b> September 30,
            2025
            <br />
            <b>Christmas Extravaganza tickets available:</b> December 2025
            (official release date will be announced)
            <br />
            <br />
            👉 Please note: <b id="red">This is not a ticket form.</b> Tickets
            will only be available through the{" "}
            <b id="green">OperationHoliday.net</b> website when registration
            opens in December 2025.
            <br />
            <br />
            Check back here for updates and links to the official ticket
            registration page.
          </p>

          <div className="">
            <img
              src={christmasImage}
              alt="Merry Christmas!"
              id="end-img"
              className="max-w-xs md:max-w-md lg:max-w-lg h-auto"
              style={{
                position: "relative",
                top: "-4rem",
              }}
            />
          </div>
        </div>
      </div>

      {/* Decorative Section */}
   
       
    </AppLayout>
  );
};

export default Tickets;
