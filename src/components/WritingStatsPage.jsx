import WritingChart from "./WritingChart";
import "../styles/homePage.css"
import "../styles/writingStatsPage.css";

export default function WritingStatsPage() {
  return (
    <div className="home-container">
      <main className="chart-container">
        <WritingChart />
      </main>
    </div>
  );
}
