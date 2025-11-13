import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const GetStarted = () => {
  const [form, setForm] = useState({
    name: "",
    goal: "",
    level: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", form);
    alert(`Welcome ${form.name}! Your AI coach setup is starting...`);
        navigate("/signup");

  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold text-orange-500 mb-2">
        Let's personalize your training plan 💪
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Fill in a few quick details so your AI fitness coach can create your
        perfect workout routine.
      </p>
        
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg hover:shadow-xl transition-all rounded-2xl p-10 w-full max-w-2xl"

      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
          required
        />
        
       <div className="grid grid-cols-2 gap-4">
  <input
    type="number"
    name="age"
    placeholder="Age"
    className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400"
    onChange={handleChange}
  />
  <select
    name="gender"
    className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400"
    onChange={handleChange}
  >
    <option value="">Gender</option>
    <option>Male</option>
    <option>Female</option>
    <option>Other</option>
  </select>
</div>

<div className="grid grid-cols-2 gap-4 mt-4">
  <input
    type="number"
    name="height"
    placeholder="Height (cm)"
    className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400"
    onChange={handleChange}
  />
  <input
    type="number"
    name="weight"
    placeholder="Weight (kg)"
    className="border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-400"
    onChange={handleChange}
  />
</div>


        <select
          name="goal"
          value={form.goal}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
          required
        >
          <option value="">Select Fitness Goal</option>
          <option>Lose Weight</option>
          <option>Build Muscle</option>
          <option>Stay Fit</option>
        </select>
       <label className="block text-gray-700 font-semibold mt-4 mb-2">
  What’s your main fitness focus?
</label>
<select
  name="focus"
  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
  onChange={handleChange}
>
  <option value="">Select Focus</option>
  <option>Strength Training</option>
  <option>Cardio</option>
  <option>Yoga & Flexibility</option>
  <option>HIIT</option>
  <option>Endurance</option>
</select>
 
       

        <select
          name="level"
          value={form.level}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
          required
        >
          <option value="">Select Experience Level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

         <select
      name="diet"
      className="w-full mt-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
      onChange={handleChange}
>
  <option value="">Diet Preference</option>
  <option>Vegetarian</option>
  <option>Non-Vegetarian</option>
  <option>Vegan</option>
  <option>Keto</option>
  <option>Paleo</option>
   </select>

         <label className="block text-gray-700 font-semibold mt-4 mb-2">
  How many days a week can you train?
</label>
<select
  name="availability"
  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
  onChange={handleChange}
>
  <option value="">Select</option>
  <option>2 Days</option>
  <option>3 Days</option>
  <option>4 Days</option>
  <option>5 Days</option>
  <option>6 Days</option>
  <option>Everyday</option>
</select>

<label className="block text-gray-700 font-semibold mt-4 mb-2">
  What equipment do you have access to?
</label>
<div className="flex flex-wrap gap-2">
  {["Dumbbells", "Resistance Bands", "Treadmill", "No Equipment", "Gym Access"].map((item) => (
    <label key={item} className="flex items-center space-x-2">
      <input
        type="checkbox"
        name="equipment"
        value={item}
        onChange={(e) => {
          const selected = form.equipment || [];
          if (e.target.checked)
            setForm({ ...form, equipment: [...selected, item] });
          else
            setForm({
              ...form,
              equipment: selected.filter((x) => x !== item),
            });
        }}
      />
      <span>{item}</span>
    </label>
  ))}
</div>
        
        <label className="block text-gray-700 font-semibold mt-4 mb-2">
  Choose your coach style 
</label>
<select
  name="coachStyle"
  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
  onChange={handleChange}
>
  <option value="">Select Coach Personality</option>
  <option>Motivational & Energetic </option>
  <option>Calm & Supportive </option>
  <option>Strict & No-Excuses </option>
  <option>Friendly & Fun </option>
</select>
     
     <textarea
  name="healthNotes"
  placeholder="Any injuries, medical conditions, or goals to share?"
  className="w-full mt-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
  onChange={handleChange}
/>


        <button
          type="submit"
          className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default GetStarted;
