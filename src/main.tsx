import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/typography.css";
import "./styles/layout.css";
import "./styles/navbar.css";
import "./styles/button.css";
import "./styles/hero.css";
import "./styles/smart-image.css";
import "./styles/about.css";
import "./styles/experience.css";
import "./styles/projects.css";
import "./styles/skills.css";
import "./styles/process.css";
import "./styles/education.css";
import "./styles/footer.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);