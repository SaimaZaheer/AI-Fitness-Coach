import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSignup = (e) => {
  e.preventDefault();

  // Get existing users
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  if (users.some((u) => u.email === email)) {
    alert("User already exists. Please login.");
    return;
  }

  // Add new user
  const newUser = { name, email, password };
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  localStorage.setItem("token", "demo-token");

  alert("Signup successful!");
  navigate("/coach");
};


  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b')", // you can replace this with any fitness image you liske
        }}
      ></div>

      {/* Orange Overlay */}
      <div className="absolute inset-0 bg-orange-500 opacity-40"></div>

      {/* Signup Form */}
      <div className="relative z-10 bg-white/90 p-8 rounded-2xl shadow-lg w-96 text-center">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">Create Account</h2>
        <p className="text-gray-600 mb-6">Join the AI Fitness Revolution</p>

        <form onSubmit={handleSignup} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={name}
  onChange={(e) => setName(e.target.value)}
          
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={email}
  onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={password}
  onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form >
      

        <p className="text-gray-700 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
