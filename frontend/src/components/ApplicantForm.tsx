import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Member = {
  role: string;
  sex: string;
  age: number;
  clothing_size: string;
  shoe_size: string;
  wish_list: string;
};

type HeadOfHousehold = {
  sex: string;
  age: number;
  clothing_size: string;
  shoe_size: string;
  wish_list: string;
};

type FamilyForm = {
  title: string;
  adopted: boolean;
  background: string;
  why_help: string;
  location: string;
  household_size: number;
  head_of_household: HeadOfHousehold;
  members: Member[];
};

export default function ApplicantFamilyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [family, setFamily] = useState<FamilyForm>({
    title: "",
    adopted: false,
    background: "",
    why_help: "",
    location: "",
    household_size: 0,
    head_of_household: {
      sex: "",
      age: 0,
      clothing_size: "",
      shoe_size: "",
      wish_list: "",
    },
    members: [],
  });

  const [memberForm, setMemberForm] = useState<Member>({
    role: "",
    sex: "",
    age: 0,
    clothing_size: "",
    shoe_size: "",
    wish_list: "",
  });

  const [headForm, setHeadForm] = useState<HeadOfHousehold>({
    sex: "",
    age: 0,
    clothing_size: "",
    shoe_size: "",
    wish_list: "",
  });

  const [editIndex, setEditIndex] = useState<number | null>(null);

  const addOrUpdateMember = () => {
    if (editIndex !== null) {
      // Update existing member
      const newMembers = [...family.members];
      newMembers[editIndex] = memberForm;
      setFamily((prev) => ({ ...prev, members: newMembers }));
      setEditIndex(null);
    } else {
      // Add new member
      setFamily((prev) => ({
        ...prev,
        members: [...prev.members, memberForm],
      }));
    }
    setMemberForm({
      role: "",
      sex: "",
      age: 0,
      clothing_size: "",
      shoe_size: "",
      wish_list: "",
    });
  };

  const editMember = (index: number) => {
    setMemberForm(family.members[index]);
    setEditIndex(index);
  };

  const removeMember = (index: number) => {
    setFamily((prev) => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index),
    }));
  };

  // --- Submit ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      family: {
        ...family,
        head_of_household: headForm,
      },
    };

    try {
      const res = await fetch("http://localhost:3001/api/applicants/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log("Submitted:", data);
      navigate("/");
      alert("Submitted successfully!");
      console.log("request:", payload);
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Applicant + Family Form
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Applicant */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Applicant</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border mb-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border"
            required
          />
        </div>

        {/* Family */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Family</h2>
          <input
            type="text"
            placeholder="Title"
            value={family.title}
            onChange={(e) => setFamily({ ...family, title: e.target.value })}
            className="w-full p-2 border mb-2"
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={family.location}
            onChange={(e) => setFamily({ ...family, location: e.target.value })}
            className="w-full p-2 border mb-2"
          />
          <input
            type="number"
            min="1"
            placeholder="Household Size"
            value={family.household_size === 0 ? "" : family.household_size}
            onChange={(e) =>
              setFamily({
                ...family,
                household_size:
                  e.target.value === "" ? 0 : Number(e.target.value),
              })
            }
            onKeyDown={(e) => {
              if (["e", "E", "+", "-"].includes(e.key)) {
                e.preventDefault();
              }
            }}
            className="w-full p-2 border mb-2"
          />
          <textarea
            placeholder="Background"
            value={family.background}
            onChange={(e) =>
              setFamily({ ...family, background: e.target.value })
            }
            className="w-full p-2 border mb-2"
          />
          <textarea
            placeholder="Why help is needed"
            value={family.why_help}
            onChange={(e) => setFamily({ ...family, why_help: e.target.value })}
            className="w-full p-2 border"
          />
        </div>

        {/* Head of Household */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Head of Household</h2>
          {/* Head of Household Form */}
          {["sex", "age", "clothing_size", "shoe_size", "wish_list"].map(
            (field) => {
              if (field === "sex") {
                return (
                  <select
                    key={field}
                    name={field}
                    value={headForm.sex}
                    onChange={(e) =>
                      setHeadForm({ ...headForm, sex: e.target.value })
                    }
                    className="w-full p-2 border mb-2"
                  >
                    <option value="">Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                );
              } else if (field === "age") {
                return (
                  <input
                    key={field}
                    type="number"
                    min="0"
                    name="age"
                    placeholder="Age"
                    value={headForm.age || ""}
                    onChange={(e) =>
                      setHeadForm({
                        ...headForm,
                        age: Number(e.target.value),
                      })
                    }
                    onKeyDown={(e) => {
                      if (["e", "E", "+", "-"].includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    className="w-full p-2 border mb-2"
                  />
                );
              } else {
                return (
                  <input
                    key={field}
                    name={field}
                    placeholder={field.replace("_", " ")}
                    value={headForm[field as keyof HeadOfHousehold]}
                    onChange={(e) =>
                      setHeadForm({
                        ...headForm,
                        [field]:
                          field === "age"
                            ? Number(e.target.value)
                            : e.target.value,
                      })
                    }
                    className="w-full p-2 border mb-2"
                  />
                );
              }
            }
          )}
        </div>

        {/* Members */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Family Members</h2>

          {/* Member Form */}
          {[
            "role",
            "sex",
            "age",
            "clothing_size",
            "shoe_size",
            "wish_list",
          ].map((field) => {
            if (field === "role") {
              return (
                <select
                  key={field}
                  name={field}
                  value={memberForm.role}
                  onChange={(e) =>
                    setMemberForm({ ...memberForm, role: e.target.value })
                  }
                  className="w-full p-2 border mb-2"
                >
                  <option value="">Select Role</option>
                  <option value="Child">Child</option>
                  <option value="Adult">Adult</option>
                </select>
              );
            } else if (field === "sex") {
              return (
                <select
                  key={field}
                  name={field}
                  value={memberForm.sex}
                  onChange={(e) =>
                    setMemberForm({ ...memberForm, sex: e.target.value })
                  }
                  className="w-full p-2 border mb-2"
                >
                  <option value="">Select Sex</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              );
            } else if (field === "age") {
              return (
                <input
                  key={field}
                  type="number"
                  min="0"
                  name="age"
                  placeholder="Age"
                  value={memberForm.age || ""}
                  onChange={(e) =>
                    setMemberForm({
                      ...memberForm,
                      age: Number(e.target.value),
                    })
                  }
                  onKeyDown={(e) => {
                    if (["e", "E", "+", "-"].includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  className="w-full p-2 border mb-2"
                />
              );
            } else {
              return (
                <input
                  key={field}
                  name={field}
                  placeholder={field.replace("_", " ")}
                  value={memberForm[field as keyof Member]}
                  onChange={(e) =>
                    setMemberForm({
                      ...memberForm,
                      [field]:
                        field === "age"
                          ? Number(e.target.value)
                          : e.target.value,
                    })
                  }
                  className="w-full p-2 border mb-2"
                />
              );
            }
          })}

          <button
            type="button"
            onClick={addOrUpdateMember}
            className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
          >
            {editIndex !== null ? "Update Member" : "Add Member"}
          </button>

          {/* Member List */}
          <ul className="space-y-2">
            {family.members.map((m, index) => (
              <li
                key={index}
                className="border p-2 rounded flex justify-between items-center"
              >
                <div>
                  {m.role} - {m.sex} - {m.age} yrs
                </div>
                <div className="space-x-2">
                  <button
                    type="button"
                    onClick={() => editMember(index)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => removeMember(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded text-lg mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
