import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "../lib/chart_data";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

export const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Fanfiction",
      data: [200, -300, 400, 150, -500, 600],
      borderColor: "#df7f7c",
      backgroundColor: "#df7f7c",
    },
    {
      label: "Novel",
      data: [-100, 250, -350, 500, -200, 300],
      borderColor: "rgb(159, 110, 104)",
      backgroundColor: "rgb(159, 110, 104)",
    },
    {
      label: "Everything",
      data: [1000, 800, -320, 504, -197, 303],
      borderColor: "#f0e3c8",
      backgroundColor: "#f0e3c8",
    },
  ],
  backgroundColor: "red",
};

export default function WritingChart() {
  return (
    <div className="chart-bg">
      <Line
        options={options}
        data={data}
        width={800}
        height={400}
      ></Line>
    </div>
  );
}
