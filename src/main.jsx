import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import HomePage from "./HomePage";
import PostsPage from "./components/PostsPage";
import Publications from "./components/Publications";
import WritingStatsPage from "./components/WritingStatsPage";
import Projects from "./components/Projects";
import PostDetail from "./components/PostDetail";
import Daffodils from "./components/Daffodils";
import Vth from "./components/Vth";

import "./theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="stats" element={<WritingStatsPage />} />
        <Route path="projects" element={<Projects />} />
        <Route path="daffodils" element={<Daffodils />} />
        <Route path="vth" element={<Vth />} />
        <Route path="publications" element={<Publications />}/>
        <Route path="posts/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
