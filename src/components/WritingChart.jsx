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
import { months, years } from "../lib/chart_data";
import { useMemo } from "react";
import "../styles/homePage.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function getMonthsData() {
  return {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Fanfiction",
        data: months.map(({ fanfiction }) => fanfiction),
        borderColor: "#df7f7c",
        backgroundColor: "#df7f7c",
      },
      {
        label: "Novel",
        data: months.map(({ novel }) => novel),
        borderColor: "rgb(159, 110, 104)",
        backgroundColor: "rgb(159, 110, 104)",
      },
      {
        label: "Everything",
        data: months.map(({ fanfiction, novel }) => fanfiction + novel),
        borderColor: "rgb(201, 163, 93)",
        backgroundColor: "rgb(201, 163, 93)",
      },
    ],
  };
}

function getYearData() {
  const currYear = new Date().getFullYear();

  const labels = [];
  const fanfictionData = [];
  const novelData = [];
  const everythingData = [];
  for (let year = currYear - 11; year <= currYear; ++year) {
    labels.push(`${String(year).slice(-2)}-${String(year + 1).slice(-2)}`);

    const { fanfiction, novel } = years.get(year) ?? {
      fanfiction: 0,
      novel: 0,
    };
    fanfictionData.push(fanfiction);
    novelData.push(novel);
    everythingData.push(fanfiction + novel);
  }

  return {
    labels,
    datasets: [
      {
        label: "Fanfiction",
        data: fanfictionData,
        borderColor: "#df7f7c",
        backgroundColor: "#df7f7c",
      },
      {
        label: "Novel",
        data: novelData,
        borderColor: "rgb(159, 110, 104)",
        backgroundColor: "rgb(159, 110, 104)",
      },
      {
        label: "Everything",
        data: everythingData,
        borderColor: "rgb(201, 163, 93)",
        backgroundColor: "rgb(201, 163, 93)",
      },
    ],
  };
}

export default function WritingChart() {
  const monthData = useMemo(getMonthsData, []);
  const yearData = useMemo(getYearData, []);

  return (
    <>
      <h1 className="chart-title">past year writing stats</h1>
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        }}
        data={monthData}
        width="100%"
        height="70%"
      ></Line>
      <h1 className="chart-title">past years writing stats</h1>
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        }}
        data={yearData}
        width="100%"
        height="70%"
      ></Line>
    </>
  );
}
