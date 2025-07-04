import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PostsPage from "./components/PostsPage";
import WritingStatsPage from "./components/WritingStatsPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/stats" element={<WritingStatsPage />} />
      </Routes>
    </Router>
  );
}
