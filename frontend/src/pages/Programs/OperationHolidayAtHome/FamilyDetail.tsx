import React from "react";

interface Member {
  role: string;
  age: number;
  sex: string;
  clothing_size?: string;
  shoe_size?: string;
  wish_list?: string;
}

interface Family {
  familyId: string;
  background: string;
  household_size: number;
  head: Member;
  members: Member[];
}

const FamilyDetail: React.FC = () => {
  // Dummy placeholder data — matches the Laravel-style structure
  const family: Family = {
    familyId: "NJ-2024-001",
    background:
      "45-year-old, single disabled mom facing significant challenges this holiday season. She is dependent on oxygen and has limited mobility because of lung issues. Donors can make a meaningful difference by helping her family celebrate Christmas, providing much-needed support and joy during a difficult time.",
    household_size: 2,
    head: {
      role: "Head",
      age: 41,
      sex: "Female",
      clothing_size: "WOMEN, XS, 2",
      shoe_size: "WOMEN, 5",
      wish_list: "I could really use a pair of shoes and a nice outfit.",
    },
    members: [
      {
        role: "Child",
        age: 9,
        sex: "Male",
        clothing_size: "BOYS, M",
        shoe_size: "BOYS, 2",
        wish_list:
          "He really wants a mini camcorder, or Xbox, Minecraft, or Roblox gift cards.",
      },
    ],
  };

  return (
    <div className="container bg-gray-50 p-6 rounded-lg border border-gray-300 shadow-sm my-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Family Details</h1>

      {/* Background Summary */}
      <div className="bg-white p-4 mb-4 border-2 border-black rounded">
        <h5 className="font-semibold mb-2">Background Summary:</h5>
        <p>{family.background}</p>
      </div>

      {/* Family Size and Ages */}
      <div className="bg-white p-4 mb-4 border-2 border-black rounded">
        <h5 className="font-semibold mb-2">Family Size: {family.household_size}</h5>

        <h6 className="font-semibold mt-2">Ages:</h6>
        <ul className="list-disc ml-6">
          <li>
            {family.head.role}: {family.head.age} — {family.head.sex}
          </li>
          {family.members.map((m, i) => (
            <li key={i}>
              {m.role}: {m.age} — {m.sex}
            </li>
          ))}
        </ul>

        <h6 className="font-semibold mt-3">Item Sizes:</h6>
        <ul className="list-disc ml-6">
          <li>
            {family.head.role}: {family.head.clothing_size}, Shoe:{" "}
            {family.head.shoe_size}
          </li>
          {family.members.map((m, i) => (
            <li key={i}>
              {m.role}: {m.clothing_size}, Shoe: {m.shoe_size}
            </li>
          ))}
        </ul>
      </div>

      {/* Wish Lists */}
      <div className="bg-white p-4 border-2 border-black rounded">
        <h5 className="font-semibold mb-2">Wish Lists:</h5>
        <ul className="list-disc ml-6">
          <li>
            {family.head.role}: {family.head.wish_list}
          </li>
          {family.members.map((m, i) => (
            <li key={i}>
              {m.role}: {m.wish_list}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FamilyDetail;