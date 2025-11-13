import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-16 px-6">
  
      <section className="max-w-5xl text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-500 mb-4">
          About AI Fitness Coach 
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          AI Fitness Coach is your intelligent companion for tracking workouts, 
          monitoring progress, and achieving your fitness goals — powered by smart AI insights 
          and a clean, motivating design.
        </p>
      </section>

    
      <section className="max-w-4xl bg-white shadow-md rounded-2xl p-6 mb-10 text-center">
        <h2 className="text-2xl font-semibold text-orange-500 mb-3">
          Our Mission 🧡
        </h2>
        <p className="text-gray-600 leading-relaxed">
          At AI Fitness Coach, our mission is to make fitness simple, intelligent, and motivating for everyone. We strive to empower users to reach their health goals through personalized insights, progress tracking, and actionable recommendations, all powered by smart AI. Every workout, every healthy habit, and every milestone is recognized, helping you stay consistent and motivated on your fitness journey.</p>
          <p className="text-gray-600 leading-relaxed" > We believe fitness is more than just exercise, it’s a holistic approach to well-being. Our goal is to support not just your physical health, but also your hydration, nutrition awareness, and mindset, creating a balanced lifestyle. With AI Fitness Coach by your side, you’ll train smarter, celebrate progress, and build habits that last a lifetime. </p>
      </section>

  
      <section className="max-w-5xl text-center mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          How It Works? 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">

          <FeatureCard
            icon="🧠"
            title="AI Insights"
            text="Get intelligent workout suggestions and feedback based on your habits."
          />
          <FeatureCard
            icon="🏋️"
            title="Personalized Training"
            text="Track exercises tailored to your fitness level and goals."
          />
          
          <FeatureCard
            icon="📈"
            title="Visual Progress"
            text="See your fitness journey through progress charts and stats."
          />
        </div>
      </section>

      
      <section className="max-w-4xl bg-white shadow-md rounded-2xl p-6 mb-12 text-center">
        <h2 className="text-2xl font-semibold text-orange-500 mb-3">
          Meet the Developer 
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Hi! I’m <span className="font-semibold text-orange-500">Saima Zaheer</span>, 
          a passionate web developer exploring AI and fitness technology.  
          This project was built as part of the <strong>CS50 Final Project</strong>, 
          combining my love for coding and health into one experience.
        </p>
      </section>

  
      <section className="text-center mb-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-3">
          Start your fitness journey today! 
        </h3>
        <button
          onClick={() => navigate("/progress")}
          className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow hover:bg-orange-600 transition"
        >
          View Progress
        </button>
      </section>

  
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600 w-full mt-auto">
        <div className="flex justify-center space-x-5 mb-3">
          <a href="#" className="hover:text-orange-500 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p>
          © 2025 <span className="text-orange-600 font-semibold">AI Fitness Coach</span> — 
          Train smarter, live stronger.
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="text-lg font-semibold text-orange-500 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
}
