import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "React",
    level: "Advanced",
    color: "#4e91d4",
  },
  {
    skill: "React Native",
    level: "Advanced",
    color: "orangered",
  },
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "yellow",
  },
  {
    skill: "HTML +CSS",
    level: "Intermediate",
    color: "orange",
  },
  {
    skill: "Express",
    level: "Beginner",
    color: "#98d30f",
  },
  {
    skill: "MongoDB",
    level: "Beginner",
    color: "white",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="myphoto.jpg" alt="Sun Park" />;
}
function Intro() {
  return (
    <div>
      <h1>Sun-Yong Park</h1>
      <p>
        Full-stack developer and a healthcare worker 💊. When not coding, I like
        to explore the beaches of San Diego and walk my tortoise outdoor to feed
        on the grass! 🌱🐢
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Beginner" && "🤔"}
        {level === "Intermediate" && "🙂"}
        {level === "Advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
