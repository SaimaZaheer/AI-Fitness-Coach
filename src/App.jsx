import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import HomePage from "./pages/HomePage";
import CoachChat from "./pages/coachchat";
import GetStarted from "./pages/getstarted";
import ProgressPage from "./pages/progress";
import AboutPage from "./pages/about"; 




function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/getstarted" element={<GetStarted />} />
      <Route path="/coach" element={<CoachChat />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
    
  );
}

export default App;
