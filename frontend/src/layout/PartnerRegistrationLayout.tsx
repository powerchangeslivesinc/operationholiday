import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // include Bootstrap



const PartnerRegistrationLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      
      <main>{children}</main>

      
      <style>{`
        body {
          padding-bottom: 0 !important;
        }

        .ticket-title {
          color: rgb(171, 28, 28);
          font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

        .ticket-des {
          color: rgb(25, 93, 25);
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
