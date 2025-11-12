import React, { useEffect, useState } from "react";
import FamilyCard from "./FamilyCard";

interface Applicant {
  _id: string;
  name: string;
  email: string;
  family: {
    title: string;
    background: string;
    adopted?: boolean;
    location?: string;
  };
}

const FamilyList: React.FC = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/applicants/");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setApplicants(data);
        }
      } catch (error) {
        console.error("Fecthing Error", error);
      }
    };
    fetchApplicants();
  }, []);

  const fallbackApplicants: Applicant[] = [
    {
      _id: "1",
      name: "Sample Family 1",
      email: "sample1@example.com",
      family: {
        title: "The Johnson Family",
        background: "Placeholder",
        adopted: false,
        location: "New York, NY",
      },
    },
    {
      _id: "2",
      name: "Sample Family 2",
      email: "sample2@example.com",
      family: {
        title: "The Smith Family",
        background: "Placeholder",
        adopted: true,
        location: "Los Angeles, CA",
      },
    },
  ];

  const displayApplicants =
    applicants.length > 0 ? applicants : fallbackApplicants;

  return (
    <div className="grid grid-cols-2 gap-6">
      {displayApplicants.map((applicant) => (
        <FamilyCard key={applicant._id} applicant={applicant} />
      ))}
    </div>
  );
};

export default FamilyList;
