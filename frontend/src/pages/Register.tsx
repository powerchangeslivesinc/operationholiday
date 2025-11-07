import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/images/applicant-imgs/snowy-bg-applicants.webp";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Registration failed");
        return;
      }

      setMessage("Registration successful!");
      console.log("User registered:", data);
      navigate("/login");
    } catch (error) {
      console.error(error);
      setMessage("Server error");
    }
  };

  return (
    <div
      className="flex items-center justify-center h-[93vh]"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.75)), url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-2/3 max-w-3xl px-6 py-10 bg-white shadow-2xl rounded-lg text-center">
        <h2 className="text-3xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="w-full">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border py-2 pl-2 block my-3 rounded-sm w-full max-w-lg mx-auto"
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border py-2 pl-2 block my-3 rounded-sm w-full max-w-lg mx-auto"
            />
          </div>
          <div className="w-full">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border py-2 pl-2 block my-3 rounded-sm w-full max-w-lg mx-auto"
            />
          </div>
          <button
            type="submit"
            className="border py-2 px-4 w-1/2 my-5 rounded-3xl bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-75 cursor-pointer"
          >
            Register
          </button>
        </form>
        {message && <p className="mt-3">{message}</p>}
      </div>
    </div>
  );
}
