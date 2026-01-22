import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import HomePage from "./HomePage";
import PostsPage from "./components/PostsPage";
import Publications from "./components/Publications";
import WritingStatsPage from "./components/WritingStatsPage";
import PostDetail from "./components/PostDetail";
import Daffodils from "./components/projects/Daffodils";
import Vth from "./components/projects/Vth";
import Ttaw from "./components/projects/ttaw";
import Tqom from "./components/projects/tqom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="stats" element={<WritingStatsPage />} />
        <Route path="publications" element={<Publications />}/>
        <Route path="projects/daffodils" element={<Daffodils />} />
        <Route path="projects/vth" element={<Vth />} />
        <Route path="projects/ttaw" element={<Ttaw />} />
        <Route path="projects/tqom" element={<Tqom />} />
        <Route path="posts/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
