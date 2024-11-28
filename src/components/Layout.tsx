"use client";
import { useState } from "react";
import Editor from "../components/Editor";
import "../app/globals.css";

const Layout = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [theme, setTheme] = useState("dark");

  const languages = [
    { id: "python", label: "Python", icon: "🐍" },
    { id: "javascript", label: "JavaScript", icon: "JS" },
    { id: "typescript", label: "TypeScript", icon: "TS" },
    { id: "go", label: "Go", icon: "Go" },
    { id: "php", label: "PHP", icon: "PHP" },
    { id: "swift", label: "Swift", icon: "Swift" },
    { id: "rust", label: "Rust", icon: "Rust" },
    { id: "cpp", label: "C++", icon: "C++" },
  ];

  const handleRun = () => {
    setOutput(`Simulated Output:\n${code}`);
  };

  const handleClear = () => {
    setCode("");
    setOutput("");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`app-container ${theme}`}>
      <aside className="sidebar">
        {languages.map((lang) => (
          <button
            key={lang.id}
            className={`language-btn ${
              lang.id === selectedLanguage ? "active" : ""
            }`}
            onClick={() => setSelectedLanguage(lang.id)}
          >
            {lang.icon} {lang.label}
          </button>
        ))}
      </aside>
      <main className="editor-container">
        <header className="editor-header">
          <button onClick={handleRun}>Run</button>
          <button onClick={handleClear}>Clear</button>
          <button onClick={toggleTheme}>
            {theme === "dark" ? "Light Theme" : "Dark Theme"}
          </button>
        </header>
        <div className="editor">
          <Editor language={selectedLanguage} code={code} setCode={setCode} />
        </div>
        <div className="output-panel">
          <h3>Output</h3>
          <pre>{output}</pre>
        </div>
      </main>
    </div>
  );
};

export default Layout;
