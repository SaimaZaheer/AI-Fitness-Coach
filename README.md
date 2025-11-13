# AI Fitness Coach

#### Description:

AI Fitness Coach is a web-based application that uses artificial intelligence to provide personalized fitness guidance, track user progress, and recommend exercises tailored to individual goals. The goal of this project is to make fitness advice more accessible and data-driven by combining an intuitive interface with AI-powered backend logic.

---

### Project Overview

This project was built as part of **CS50x’s Final Project**. It combines front-end technologies for a clean, responsive design and a Node.js/Express backend that handles user interactions, API calls, and fitness data management.

The web app allows users to:
- Get AI-generated fitness advice
- View personalized exercise recommendations
- Track their progress interactively
- Navigate through a simple, user-friendly interface

The focus of the app is **simplicity and automation** — users can receive workout plans or health insights without manually searching or reading long guides.

---

### Features

- **Responsive Frontend:** Built using HTML, Tailwind CSS, and Vite for fast performance and modern design.
- **AI Integration:** Communicates with OpenAI’s API (or similar model) to generate personalized workout guidance based on user input.
- **Backend Server:** Node.js + Express handles API routes, environment variables, and manages secure connections between frontend and AI endpoints.
- **Environment Configurations:** Sensitive keys and credentials are stored in the `.env` file (not included for security).
- **Interactive UI:** Includes a clean homepage with a navbar, "Get Started" button, and footer for navigation clarity.
- **Scalable Structure:** Separated backend and frontend directories make future expansion easy.

---

### Folder Structure

backend/
├── server.js # Main Express server
├── package.json # Backend dependencies
├── .env # Environment variables (API keys, etc.)
├── node_modules/ # Installed modules
frontend/
├── index.html # Main entry page
├── tailwind.config.js # Tailwind setup
├── postcss.config.js # PostCSS configuration
├── vite.config.js # Vite build configuration
├── eslint.config.js # ESLint configuration
├── package.json # Frontend dependencies
└── src/ # Components, CSS, and scripts
README.md # Project documentation

markdown
Copy code

---

### How It Works

1. **Frontend Interface:**  
   When a user visits the homepage, they’re greeted with a simple interface containing a navbar, a welcome section, and a call-to-action “Get Started” button.

2. **User Interaction:**  
   Once the user inputs a fitness-related question or selects a goal, the frontend sends a request to the backend server.

3. **Backend Processing:**  
   The Express server receives the request, processes it, and sends it to the AI API (configured in `.env`). It then receives the AI’s response and sends it back to the frontend.

4. **AI Response Display:**  
   The frontend displays the AI’s fitness advice or personalized plan dynamically on the page, giving the user real-time feedback.

5. **Future Scalability:**  
   The structure allows for easy addition of authentication, database connections (e.g., MongoDB), or extended analytics features in later versions.

---

### Technologies Used

- **Frontend:**  
  - HTML5  
  - Tailwind CSS  
  - JavaScript (ES6)  
  - Vite (for development and build)

- **Backend:**  
  - Node.js  
  - Express.js  
  - dotenv (for environment variable management)  
  - OpenAI API (for AI-powered responses)

- **Tools & Utilities:**  
  - ESLint for code consistency  
  - PostCSS for CSS optimization  
  - Git/GitHub for version control  

---

### Design Choices

- **Tailwind CSS:** chosen for rapid UI development with responsive design out of the box.  
- **Vite:** selected for its fast development server and optimized builds.  
- **Node + Express:** used to easily manage backend routing and API requests.  
- **Separation of Concerns:** keeping frontend and backend in separate folders ensures scalability and clarity.  
- **.env Usage:** ensures API keys and sensitive data aren’t hard-coded in the source files.  

These decisions were made to balance **performance, readability, and maintainability** while following modern web development practices.

---

### Setup Instructions

To run this project locally:

1. Clone the repository or download the ZIP.  
2. Navigate into the main project folder.  
3. Open two terminals — one for the backend and one for the frontend.  

#### Backend setup:
```bash
cd backend
npm install
node server.js
Frontend setup:
bash
Copy code
npm install
npm run dev
Open the local development URL (usually shown in the terminal, something like http://localhost:5173/).

Interact with the app and test the AI fitness functionality.

Possible Improvements
Add user authentication and personal dashboards.

Connect to a real database (MongoDB or Firebase) for progress tracking.

Improve AI context understanding and response accuracy.

Integrate a visual exercise tracker and progress charts.

Acknowledgments
Special thanks to CS50 for providing an incredible learning experience that inspired this project.
This final project represents the combination of skills learned in programming, frontend design, backend logic, and API integration.

Author
Created by Syma
CS50x Student • Aspiring Web Developer • Fitness Enthusiast
