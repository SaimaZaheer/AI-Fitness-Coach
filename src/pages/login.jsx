import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  // Get all users from localStorage (array now, safer for multiple users)
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Find the user with matching email & password
  const matchedUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!matchedUser) {
    alert("Invalid email or password");
    return;
  }

  // Login success
  localStorage.setItem("token", "demo-token");
  alert("Login successful!");
  navigate("/coach"); // redirect to coach chat or dashboard
};


  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b')", // you can replace this with any fitness image you like
        }}
      ></div>

      {/* Orange Overlay */}
      <div className="absolute inset-0 bg-orange-500 opacity-40"></div>

      {/* Login Form */}
      <div className="relative z-10 bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Continue your AI-powered fitness journey.
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-3 mb-4 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-3 mb-6 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-all font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-500 hover:underline font-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
