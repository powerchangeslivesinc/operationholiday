import React, { useState } from "react";

export default function ApplicantsForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile_phone: "",
    street_address: "",
    apartment_num: "",
    city: "",
    state: "",
    zip_code: "",
    applicant_age: "",
    gender: "",
    race: "",
    household_structure: "",
    num_adults: "",
    num_children: "",
    num_children_special_needs: "",
    contact_method: "",
    gifts: "",
    future_prog_interest: "",
    referral_source: "",
    comments: "",
  });

  const [photo_id, setPhotoId] = useState<File | null>(null);
  const [public_assistance, setPublicAssistance] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");

  // handle text input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (photo_id) data.append("photo_id", photo_id);
    if (public_assistance) data.append("public_assistance", public_assistance);

    try {
      const response = await fetch("http://localhost:5000/api/applicants", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("✅ Application submitted successfully!");
        setFormData({
          full_name: "",
          email: "",
          mobile_phone: "",
          street_address: "",
          apartment_num: "",
          city: "",
          state: "",
          zip_code: "",
          applicant_age: "",
          gender: "",
          race: "",
          household_structure: "",
          num_adults: "",
          num_children: "",
          num_children_special_needs: "",
          contact_method: "",
          gifts: "",
          future_prog_interest: "",
          referral_source: "",
          comments: "",
        });
        setPhotoId(null);
        setPublicAssistance(null);
      } else {
        setStatus("❌ Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Error: Could not connect to the server.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-8 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Operation Holiday at Home – Applicant Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="full_name" placeholder="Full Name" value={formData.full_name} onChange={handleChange} className="border p-2 rounded" required />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 rounded" required />
          <input name="mobile_phone" placeholder="Mobile Phone" value={formData.mobile_phone} onChange={handleChange} className="border p-2 rounded" required />
          <input name="street_address" placeholder="Street Address" value={formData.street_address} onChange={handleChange} className="border p-2 rounded" required />
          <input name="apartment_num" placeholder="Apt #" value={formData.apartment_num} onChange={handleChange} className="border p-2 rounded" />
          <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border p-2 rounded" required />
          <input name="state" placeholder="State" value={formData.state} onChange={handleChange} className="border p-2 rounded" required />
          <input name="zip_code" placeholder="Zip Code" value={formData.zip_code} onChange={handleChange} className="border p-2 rounded" required />
        </div>

        {/* Demographics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="applicant_age" placeholder="Age" value={formData.applicant_age} onChange={handleChange} className="border p-2 rounded" required />
          <input name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} className="border p-2 rounded" required />
          <input name="race" placeholder="Race" value={formData.race} onChange={handleChange} className="border p-2 rounded" required />
          <input name="household_structure" placeholder="Household Structure" value={formData.household_structure} onChange={handleChange} className="border p-2 rounded" required />
          <input name="num_adults" placeholder="# of Adults" value={formData.num_adults} onChange={handleChange} className="border p-2 rounded" required />
          <input name="num_children" placeholder="# of Children" value={formData.num_children} onChange={handleChange} className="border p-2 rounded" required />
          <input name="num_children_special_needs" placeholder="# of Children w/ Special Needs" value={formData.num_children_special_needs} onChange={handleChange} className="border p-2 rounded" required />
        </div>

        {/* Contact and Gifts */}
        <input name="contact_method" placeholder="Preferred Contact Method" value={formData.contact_method} onChange={handleChange} className="border p-2 rounded w-full" required />
        <input name="gifts" placeholder="Gift List (comma-separated)" value={formData.gifts} onChange={handleChange} className="border p-2 rounded w-full" required />

        {/* File Uploads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Photo ID</label>
            <input type="file" accept="image/*" onChange={(e) => setPhotoId(e.target.files?.[0] || null)} className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Proof of Public Assistance / Hardship</label>
            <input type="file" onChange={(e) => setPublicAssistance(e.target.files?.[0] || null)} className="border p-2 rounded w-full" />
          </div>
        </div>

        {/* Other fields */}
        <textarea name="future_prog_interest" placeholder="Are you interested in future programs?" value={formData.future_prog_interest} onChange={handleChange} className="border p-2 rounded w-full" />
        <textarea name="referral_source" placeholder="How did you hear about us?" value={formData.referral_source} onChange={handleChange} className="border p-2 rounded w-full" />
        <textarea name="comments" placeholder="Additional comments (optional)" value={formData.comments} onChange={handleChange} className="border p-2 rounded w-full" />

        <button type="submit" className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition">
          Submit Application
        </button>

        {status && <p className="mt-3 text-center text-sm">{status}</p>}
      </form>
    </div>
  );
}

