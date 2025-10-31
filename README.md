# TalentFlow

TalentFlow is a modern, full-featured hiring platform built to simplify and streamline recruitment management.
Developed with React.js, Vite, and Tailwind CSS, it delivers a fast, responsive UI with light/dark mode, robust analytics, and seamless navigation — all powered by mock APIs for rapid prototyping and realistic testing.

#  🚀 Key Features

Dashboard Overview – Centralized metrics and insights for jobs and candidates.

Job Management – Create, view, and manage job listings efficiently.

Candidate Tracking – Visualize candidate progress across multiple hiring stages.

Assessments – Build, assign, and take custom job assessments.

Analytics & Insights – Interactive charts for pipeline, velocity, and scores with CSV export.

Light/Dark Mode – Theme toggle with persistent state via localStorage.

Global Search – Instantly search jobs, candidates, and assessments.

Responsive UI – Fully mobile-friendly with Tailwind CSS.

Mock Backend – Powered by MSW (Mock Service Worker) for realistic API simulation.

# 🧱 Tech Stack
Layer	Technologies
Frontend	React.js (18+), TypeScript
Build Tool	Vite
Routing	React Router (v6+)
Styling	Tailwind CSS (OKLCH colors, dark mode)
UI Components	Shadcn/UI
Icons	Lucide React
Charts	Recharts
Mock API	MSW
Utilities	clsx, tailwind-merge
Code Quality	ESLint, Prettier

# 📂 Project Structure
/ENTNT/
├── public/
│   ├── index.html
│   └── mockServiceWorker.js
├── src/
│   ├── components/
│   │   ├── assessments/
│   │   ├── candidates/
│   │   ├── jobs/
│   │   ├── layout/
│   │   ├── ui/
│   │   └── ThemeProvider.tsx
│   ├── hooks/
│   ├── lib/
│   ├── mocks/
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   ├── AnalyticsPage.tsx
│   ├── AssessmentsPage.tsx
│   ├── TakeAssessmentPage.tsx
│   ├── AssessmentBuilder.tsx
│   ├── NotFoundPage.tsx
│   ├── HomePage.tsx
│   └── index.tsx
├── tailwind.config.js
├── vite.config.ts
├── package.json
├── .env
└── README.md

# ⚙️ Setup Guide
1. Prerequisites

Node.js v18+

npm v9+

2. Installation
git clone <repository-url>
cd ENTNT
npm install

3. Environment Setup

Create a .env file in the root directory:

VITE_API_URL=http://localhost:5173

4. Initialize Mock Service Worker
npx msw init public/ --save

5. Run the Development Server
npm run dev


Then open: http://localhost:5173

6. Build for Production
npm run build
npm run preview

# 🧩 Available Scripts
Command	Description
npm run dev	Start the development server
npm run build	Build for production
npm run preview	Preview the production build
npm run lint	Run ESLint checks
npm run format	Format code using Prettier
# 🏗️ Architecture Overview
Frontend

Modular, component-driven structure using React + TypeScript.

Routing handled by React Router (/, /jobs, /candidates, /assessments, /analytics).

ThemeProvider with React Context manages light/dark mode, synced via Tailwind classes.

Data Layer

DatabaseService (src/lib/db.ts) handles mock job, candidate, and assessment data.

MSW simulates backend APIs with controlled latency and error rates.

Analytics (pipeline, velocity, scores) computed client-side for speed.

Core Components

Navigation – Responsive header with theme toggle.

AnalyticsPage – Data visualizations with CSV export.

ThemeProvider – Handles global theming and persistence.

💡 Technical Highlights

⚡ Vite for blazing-fast builds and HMR.

🎨 Tailwind CSS (OKLCH) for accessible, consistent theming.

🧠 Custom Theme Context for persistent dark mode.

🧪 MSW for realistic, isolated API testing.

📊 Recharts for interactive, theme-aware analytics.

📂 CSV Export via Blob API for instant data downloads.

🧱 Shadcn/UI for composable, accessible UI building blocks.

# 🐞 Known Issues

Kanban Drag-and-Drop:
Dragging between columns is supported, but state persistence is under development.
Ensure the data state updates correctly when cards move.

Mock Data Limitation:
Analytics currently rely on static mock data. For real-time analytics, extend DatabaseService.

Tailwind Resolution Error:
If you see Can't resolve 'tailwindcss', try:

npm install


and ensure vite.config.ts imports @tailwindcss/vite.

# 🔮 Planned Enhancements

Integration with a real backend (Node.js/Express).

Dynamic linking of candidates and assessments per job.

Toast notifications (e.g., react-toastify) for feedback.

Improved accessibility (ARIA, Lighthouse).

Server-side pagination for large datasets.

# 🤝 Contributing

Fork the repo

Create a feature branch:

git checkout -b feature/your-feature


Commit and push your changes:

git commit -m "Add new feature"
git push origin feature/your-feature


Open a Pull Request 🚀

# 📜 License

Licensed under the MIT License.
See the LICENSE
 file for details.
