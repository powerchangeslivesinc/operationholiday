import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import bgImg from "../assets/images/applicant-imgs/snowy-bg-applicants.webp"

export default function Login() {
  const { user, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Automatically redirect once user is set
  useEffect(() => {
    if (user) {
      navigate("/"); // redirect after context updates
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "Login failed");
      } else {
        setError("Unexpected Error");
      }
    }
  };

  return (
    <>
      <div
        className="flex items-center justify-center h-[93vh]"
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.75)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-2/3 max-w-3xl px-6 py-10 bg-white shadow-2xl rounded-lg text-center">
          <form onSubmit={handleSubmit} className="p-6 mx-auto">
            <h1 className="pb-5 text-3xl font-bold">Login</h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border py-2 pl-2 block my-5 rounded-sm w-full max-w-lg mx-auto"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border py-2 pl-2 block my-5 rounded-sm w-full max-w-lg mx-auto"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded-3xl w-1/2 cursor-pointer hover:bg-green-800 transition duration-75"
            >
              Login
            </button>

            <div className="flex pt-6 justify-center">
              <p className="pr-1 text-gray-500">First Time?</p>
              <Link to="/register">
                <button className="cursor-pointer">Register</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
