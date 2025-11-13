import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function ProgressPage() {
  // Load from localStorage if available
  const savedProgress = JSON.parse(localStorage.getItem("fitnessProgress")) || {
    daysWorkedOut: 0,
    waterGlasses: 0,
    workoutsDone: 0,
    goalCompletion: 0,
  };

  const [form, setForm] = useState(savedProgress);
  const [progress, setProgress] = useState(savedProgress);

  const COLORS = ["#FB923C", "#E5E7EB"]; 

  const chartData = [
    { name: "Completed", value: progress.goalCompletion },
    { name: "Remaining", value: 100 - progress.goalCompletion },
  ];

  
  useEffect(() => {
    localStorage.setItem("fitnessProgress", JSON.stringify(progress));
  }, [progress]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (
      form.goalCompletion < 0 ||
      form.goalCompletion > 100 ||
      form.daysWorkedOut < 0 ||
      form.workoutsDone < 0 ||
      form.waterGlasses < 0
    ) {
      alert("Please enter valid positive numbers (goal 0-100%)");
      return;
    }

    setProgress(form);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-16 px-6 pb-10">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">
        Fitness Progress Tracker
      </h1>

      {/* Mini Form */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Update Your Progress</h2>
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end"
        >
          <div>
            <label className="block text-gray-600 mb-1">Days Worked Out</label>
            <input
              type="number"
              name="daysWorkedOut"
              value={form.daysWorkedOut}
              onChange={handleInputChange}
              min={0}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Glasses of Water Daily</label>
            <input
              type="number"
              name="waterGlasses"
              value={form.waterGlasses}
              onChange={handleInputChange}
              min={0}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Workouts Done</label>
            <input
              type="number"
              name="workoutsDone"
              value={form.workoutsDone}
              onChange={handleInputChange}
              min={0}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Goal Progress (%)</label>
            <input
              type="number"
              name="goalCompletion"
              value={form.goalCompletion}
              onChange={handleInputChange}
              min={0}
              max={100}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Update Progress
            </button>
          </div>
        </form>
      </div>

      
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 space-y-8">
        {/* Pie Chart Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Overall Goal Progress
            </h2>
            <p className="text-gray-500 text-sm max-w-sm">
              You’ve completed{" "}
              <span className="font-semibold text-orange-500">
                {progress.goalCompletion}%
              </span>{" "}
              of your fitness goal. Keep pushing — consistency is key!
            </p>
          </div>

          <PieChart width={220} height={220}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard title="Days Worked Out" value={progress.daysWorkedOut} />
          <StatCard title="Glasses of Water" value={progress.waterGlasses} />
          <StatCard title="Workouts Done" value={progress.workoutsDone} />
          <StatCard title="Goal Progress" value={`${progress.goalCompletion}%`} />
        </div>

  
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Goal Progress</h3>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-4 bg-orange-500 rounded-full transition-all duration-700"
              style={{ width: `${progress.goalCompletion}%` }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            You’re {100 - progress.goalCompletion}% away from your target goal.
          </p>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold text-orange-500 mt-1">{value}</div>
    </div>
  );
}
