// src/layout/AppLayout.tsx
import React from "react";

const AppLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
     <div
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.75)), url('/snowy-bg-applicants.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // ensures background fills the page
      }}
    >
      {children}
    </div>
  );
};

export default AppLayout;
