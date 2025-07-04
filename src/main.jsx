import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import HomePage from "./HomePage";
import PostsPage from "./components/PostsPage";
import Publications from "./components/Publications";
import WritingStatsPage from "./components/WritingStatsPage";
import Fanart from "./components/Fanart";

import "./theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="stats" element={<WritingStatsPage />} />
        <Route path="art" element={<Fanart />} />
        <Route path="publications" element={<Publications />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
