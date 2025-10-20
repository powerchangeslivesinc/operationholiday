import React from "react";
import "../index.css"; // make sure Tailwind's styles are imported globally

const PartnerRegistrationLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* Divider */}
      <div className="w-full h-12 bg-black/10 border-y border-black/20 shadow-inner"></div>

      {/* Inline custom styles replaced with Tailwind utility classes */}
      <style>{`
        body {
          padding-bottom: 0 !important;
        }
         
        .ticket-title {
          color: rgba(93, 76, 188, 1);
          font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

        .ticket-des {
          color: rgba(106, 6, 113, 1);
          font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

        .b-example-divider {
          width: 100%;
          height: 3rem;
          background-color: #0000001a;
          border: solid rgba(0, 0, 0, 0.15);
          border-width: 1px 0;
          box-shadow: inset 0 0.5em 1.5em #0000001a, inset 0 0.125em 0.5em #00000026;
        }
 
      `}</style>
    </div>
  );
};

export default PartnerRegistrationLayout;
