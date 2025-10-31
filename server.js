import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ----- CONFIG -----
const LATENCY_MIN = 200;   // ms
const LATENCY_MAX = 1200;  // ms
const ERROR_RATE = 0.1;    // 10% write failure
// ------------------

// Fake data
const jobs = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  title: `Job ${i + 1}`,
  status: i < 15 ? "active" : "archived",
}));

const candidates = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Candidate ${i + 1}`,
  jobId: Math.ceil(Math.random() * 25),
  stage: ["Applied", "Screening", "Interview", "Offer"][Math.floor(Math.random() * 4)],
}));

const assessments = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  title: `Assessment ${i + 1}`,
  questions: Array.from({ length: 10 + Math.floor(Math.random() * 5) }, (_, j) => ({
    id: j + 1,
    question: `Q${j + 1} for Assessment ${i + 1}`,
  })),
}));

// Helper: delay + random failure
const simulateNetwork = (req, res, next) => {
  const delay = LATENCY_MIN + Math.random() * (LATENCY_MAX - LATENCY_MIN);
  setTimeout(() => {
    if (["POST", "PUT", "DELETE"].includes(req.method) && Math.random() < ERROR_RATE) {
      return res.status(500).json({ error: "Simulated server error" });
    }
    next();
  }, delay);
};

app.use(simulateNetwork);

// ---------- Routes ----------
app.get("/jobs", (req, res) => res.json(jobs));
app.get("/candidates", (req, res) => res.json(candidates));
app.get("/assessments", (req, res) => res.json(assessments));

app.post("/jobs", (req, res) => {
  const newJob = { id: jobs.length + 1, ...req.body };
  jobs.push(newJob);
  res.status(201).json(newJob);
});

app.put("/candidates/:id", (req, res) => {
  const candidate = candidates.find(c => c.id == req.params.id);
  if (!candidate) return res.status(404).send("Not found");
  Object.assign(candidate, req.body);
  res.json(candidate);
});

app.delete("/assessments/:id", (req, res) => {
  const idx = assessments.findIndex(a => a.id == req.params.id);
  if (idx === -1) return res.status(404).send("Not found");
  assessments.splice(idx, 1);
  res.status(204).send();
});

app.listen(4000, () => console.log("Mock API running on http://localhost:4000"));
