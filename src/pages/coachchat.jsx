import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ 1. import navigate

const TypingBubble = () => (
  <div className="bg-orange-100 text-gray-800 p-3 rounded-lg max-w-xs self-start animate-pulse">
    <div className="flex space-x-1">
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
      <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
    </div>
  </div>
);

const CoachChat = () => {
    const navigate = useNavigate(); // ✅ 2. initialize navigate

  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hey there! Ready to crush your workout today? 💪" },
  ]);
  const [input, setInput] = useState("");
 
  const dummyReplies = [
  "Let's start with a warm-up!💪",
  "Great job on your last workout!",
  "Remember to drink water",
  "Keep your posture correct while exercising!",
  "Don't forget to stretch before your workout.",
];

  const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = { sender: "user", text: input };
  const typingMessage = { sender: "ai", typing: true };

  // Add user message + typing bubble in one update
  setMessages(prev => [...prev, userMessage, typingMessage]);
  setInput("");

  const dummyReplies = [
    "Let's start with a warm-up! 💪",
    "Great job on your last workout!",
    "Remember to drink water!",
    "Keep your posture correct while exercising!",
    "Don't forget to stretch before your workout.",
  ];

  try {
    const response = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();

    const aiMessage = {
      sender: "ai",
      text: data.reply || dummyReplies[Math.floor(Math.random() * dummyReplies.length)],
    };

    // Remove typing bubble and add AI reply
    setMessages(prev => prev.filter(msg => !msg.typing).concat(aiMessage));
  } catch (error) {
    console.error("Error connecting to API:", error);

    const randomReply = dummyReplies[Math.floor(Math.random() * dummyReplies.length)];

    // Remove typing bubble and show dummy AI reply
    setMessages(prev => prev.filter(msg => !msg.typing).concat({ sender: "ai", text: randomReply }));
  }
};


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-20">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Coach Chat</h1>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg flex flex-col p-4">
        <div className="flex-grow overflow-y-auto h-96 mb-4 space-y-3">
          {messages.map((msg, index) => 
  msg.typing ? (
    <TypingBubble key={index} />
  ) : (
    <div
      key={index}
      className={`p-3 rounded-lg max-w-xs ${
        msg.sender === "ai"
          ? "bg-orange-100 text-gray-800 self-start"
          : "bg-orange-500 text-white self-end ml-auto"
      }`}
    >
      {msg.text}
    </div>
  )
)}

   </div>

        <div className="flex items-center border-t pt-3">
          <input
            type="text"
            className="flex-grow border rounded-full px-4 py-2 mr-2 focus:outline-none"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
          >
            Send
          </button>
        </div>
       <button
          onClick={() => navigate("/progress")} // ✅ 3. navigate to progress page
          className="mt-4 bg-gray-200 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-100 transition"
        >
          View Progress 
        </button>

      </div>
    </div>
  );
};

export default CoachChat;
