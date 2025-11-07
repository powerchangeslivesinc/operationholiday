import { useState } from "react";
export default function Application() {

    const [formData, setFormData] = useState({});

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const { name, value, type } = e.target as HTMLInputElement;
  const file = type === "file" ? (e.target as HTMLInputElement).files?.[0] : null;

  setFormData({
    ...formData,
    [name]: file || value,
  });
};

const handleSubmit = (e: { preventDefault: () => void; }) => {
e.preventDefault();
console.log(formData);
alert("Form submitted (console preview)");
};
  return (
  
      <><header>
          <div
              className="text-white flex items-center justify-center"
              style={{
                  background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
            url('/trees-bg-header-applicants.webp')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "15vh",
              }}
          >
              <h1 className="text-3xl md:text-4xl font-bold text-center">
                  Application Form
              </h1>
          </div>
      </header><div className="max-w-3xl mx-auto py-10 px-4">
              <h1 className="text-3xl font-bold mb-8">Operation Holiday Application Form</h1>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                  {[
                      { label: "Applicant Full Name", name: "fullName" },
                      { label: "Email Address", name: "email", type: "email" },
                      { label: "Mobile Phone", name: "phone" },
                      { label: "Street Address", name: "street" },
                      { label: "Apt/Unit Number", name: "unit" },
                      { label: "City", name: "city" },
                      { label: "State", name: "state" },
                      { label: "Zip Code", name: "zip" },
                      { label: "Age of Applicant", name: "age", type: "number" },
                      { label: "Gender Identity", name: "gender" },
                      { label: "Race/Ethnicity", name: "race" },
                      { label: "Household Structure", name: "household" },
                      { label: "Number of Adults in Household", name: "adults", type: "number" },
                      { label: "Number of Children in Household", name: "children", type: "number" },
                      { label: "Do any children in your household have special needs?", name: "specialNeeds" },
                      { label: "Description of Special needs", name: "specialNeedsExplanation" },
                      { label: "What is your preferred method of contact?", name: "contactMethod" },
                      { label: "Gift Wishlist for Children", name: "gifts" },
                      { label: "Referral Source", name: "referral" },
                      { label: "Additional Comments", name: "notes" },
                  ].map((field) => (
                      <div key={field.name}>
                          <label className="block font-semibold mb-1">{field.label}</label>
                          <input
                              type={field.type || "text"}
                              name={field.name}
                              onChange={handleChange}
                              className="w-full p-2 border rounded-md" />
                      </div>
                  ))}


                  <div>
                      <label className="block font-semibold mb-1">Upload Photo ID</label>
                      <input type="file" name="photoId" onChange={handleChange} />
                  </div>


                  <div>
                      <label className="block font-semibold mb-1">Upload Public Assistance Proof</label>
                      <input type="file" name="assistanceProof" onChange={handleChange} />
                  </div>


                  <div>
                      <label className="block font-semibold mb-1">Interest in Future Programs</label>
                      <select name="futurePrograms" onChange={handleChange} className="w-full p-2 border rounded-md">
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                      </select>
                  </div>


                  <button type="submit" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg font-semibold">
                      Submit Application
                  </button>
              </form>
          </div></>    
      
  );
}