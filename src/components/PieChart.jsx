import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ n }) => {
  // Data configuration for the Doughnut chart
  const data = {
    labels: ["Value"], // Labels for the chart
    datasets: [
      {
        data: [n, 15 - n], // Chart data
        backgroundColor: ["rgb(59 130 246)", "#e0e0e0"], // Segment colors
        hoverBackgroundColor: ["rgb(29 26 255)", "#cfcfcf"], // Hover colors
        borderWidth: 0, // Removes border
        cutout: "70%", // Makes it a donut chart
        rotation: 180, // Rotates the chart by 180 degrees
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true, // Makes the chart responsive
    plugins: {
      legend: {
        display: false, // Hides legend
      },
      tooltip: {
        enabled: false, // Disables tooltip
      },
    },
  };

  return (
    <div className="w-52 h-52 p-10 mx-auto bg-white rounded relative">
      {/* Render the Doughnut chart */}
      <Doughnut data={data} options={options} />
      {/* Overlay content inside the chart */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-2xl">🎯</span>
      </div>
    </div>
  );
};

export default PieChart;
