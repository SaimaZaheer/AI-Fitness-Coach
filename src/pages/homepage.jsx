import React from "react";
import GetStarted from "./getstarted";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-black flex flex-col">
     <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-grow px-6 mt-24">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Train smarter, not harder —{" "}
          <span className="text-orange-500">with AI.</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Your personal digital trainer to track workouts and guide your
          fitness journey intelligently.
        </p>

        <Link to="/getstarted">
        <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300">
          Get Started
        </button>
        </Link>
      </section>

<footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
  <div className="flex justify-center space-x-5 mb-3">
    <a href="#" className="hover:text-orange-500 transition"><i className="fab fa-instagram"></i></a>
    <a href="#" className="hover:text-orange-500 transition"><i className="fab fa-twitter"></i></a>
    <a href="#" className="hover:text-orange-500 transition"><i className="fab fa-facebook"></i></a>
  </div>
  <p>© 2025 <span className="text-orange-600 font-semibold">AI Fitness Coach</span> — Train smarter, live stronger.</p>
</footer>


    </div>
  );
};

export default HomePage;
