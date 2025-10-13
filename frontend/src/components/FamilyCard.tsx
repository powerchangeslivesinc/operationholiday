import React from "react";
import { useNavigate } from "react-router-dom";
import boxImg from "../assets/images/box.png";

interface FamilyCardProps {
  familyId: string;
  background: string;
  adopted?: boolean;
}

const FamilyCard: React.FC<FamilyCardProps> = ({
  familyId,
  background,
  adopted = false,
}) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    // For now, navigate to a static FamilyDetail placeholder page
    // Later, you can append the ID like `/programs/holidayathome/familydetail/${familyId}`
    navigate("/programs/holidayathome/familydetail");
  };

  return (
    <div className="col d-flex">
      <div className="card text-center position-relative w-100 d-flex flex-column shadow-sm hover:shadow-md transition-all duration-200">
        {/* Adopted Badge */}
        {adopted && (
          <span className="fs-6 badge bg-secondary position-absolute top-0 start-0 m-2">
            Adopted
          </span>
        )}

        {/* Family Image */}
        <img
          src={boxImg}
          alt="Box"
          className="img-fluid mx-auto mb-3"
          style={{ maxWidth: "100px", height: "auto" }}
        />

        {/* Card Body */}
        <div className="card-body d-flex flex-column flex-grow-1">
          <h3 className="fw-normal text-dark">{familyId}</h3>
          <p className="text-dark flex-grow-1">{background}</p>
        </div>

        {/* Footer Button */}
        <div className="card-footer bg-transparent border-0 mt-auto">
          <button
            onClick={handleViewDetails}
            className={`fw-semibold px-4 py-2 transition-all duration-150 ${
              adopted
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
            disabled={adopted}
            style={{
              borderRadius: "6px",
              fontSize: "0.95rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            {adopted ? "Already Adopted" : "View Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilyCard;