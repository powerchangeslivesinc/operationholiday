import React from "react";
import { useNavigate } from "react-router-dom";
import boxImg from "../assets/images/box.png";

interface FamilyCardProps {
  applicant: {
    _id: string;
    name: string;
    email: string;
    family: {
      title: string;
      background: string;
      adopted?: boolean;
      location?: string;
    };
  };
}

const FamilyCard: React.FC<FamilyCardProps> = ({ applicant }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    // later: navigate(`/programs/holidayathome/familydetail/${applicant._id}`)
    navigate("/programs/holidayathome/familydetail");
  };

  const { family } = applicant;

  return (
    <div className="card text-center w-100 d-flex flex-column">
      <div className="card text-center shadow-md bg-white rounded-lg flex flex-col h-full p-4 transition hover:shadow-lg hover:-translate-y-1">
        <h4 className="font-semibold text-lg mb-2">{family.title}</h4>
        <img
          src={boxImg}
          alt="Box"
          className="mx-auto mb-4 object-contain max-w-2/6"
        />

        <div className="flex-grow text-left">
          <p className="text-gray-700 text-sm line-clamp-2 text-center">
            {family.background}
          </p>
        </div>

        <div className="mt-4">
          <button
            onClick={handleViewDetails}
            className={`fw-semibold px-4 py-2 transition-all duration-150 ${
              family.adopted
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
            }`}
            disabled={family.adopted}
            style={{
              borderRadius: "6px",
              fontSize: "0.95rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            {family.adopted ? "Already Adopted" : "View Details"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FamilyCard;
