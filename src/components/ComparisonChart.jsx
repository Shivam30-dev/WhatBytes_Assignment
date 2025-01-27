import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

// Register necessary Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  annotationPlugin
);

const ComparisonChart = ({ yourPercentile }) => {
  // Helper function to generate labels for the x-axis
  const generateLabels = (step, max) => {
    const labels = [];
    for (let i = 0; i <= max; i += step) {
      labels.push(parseFloat(i.toFixed(2))); // Keep numbers with two decimals
    }
    return labels;
  };

  // Data configuration for the chart
  const data = {
    labels: generateLabels(100 / 15, 100), // Generate labels with equal spacing
    datasets: [
      {
        label: "Number of Students", // Descriptive label for the dataset
        data: [
          { x: 0, y: 2 },
          { x: 6.67, y: 6 },
          { x: 13.33, y: 8 },
          { x: 20, y: 12 },
          { x: 26.67, y: 18 },
          { x: 33.33, y: 20 },
          { x: 40, y: 22 },
          { x: 46.67, y: 30 },
          { x: 53.33, y: 25 },
          { x: 60, y: 18 },
          { x: 66.67, y: 12 },
          { x: 73.33, y: 10 },
          { x: 80, y: 8 },
          { x: 86.67, y: 6 },
          { x: 93.33, y: 4 },
          { x: 100, y: 4 }, // Corrected x value for better accuracy
        ],
        borderColor: "#844bc0", // Line color
        borderWidth: 1,
        backgroundColor: "rgba(137, 75, 192, 0.2)", // Area fill under the line
        pointBackgroundColor: "#fff", // Point color
        pointHoverBackgroundColor: "#ad4bc0", // Hover color for points
        fill: true, // Enable filling under the line
      },
    ],
  };

  // Chart configuration and options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend to keep it clean
      },
      tooltip: {
        mode: "index", // Tooltip shows data for all points aligned with the cursor
        intersect: false,
      },
      annotation: {
        annotations: {
          line1: {
            type: "line", // Annotation line to highlight the user's percentile
            xMin: (yourPercentile / 100) * 15,
            xMax: (yourPercentile / 100) * 15,
            borderColor: "#8e9191",
            borderWidth: 1,
            label: {
              content: "Your Percentile", // Label for the annotation line
              enabled: true,
              position: "top",
              backgroundColor: "rgba(255, 99, 132, 0.8)",
            },
          },
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Smooth line curvature
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false, // Hide grid lines for cleaner visuals
        },
        ticks: {
          callback: function (value) {
            // Show only key percentages on the x-axis
            const percent = (value / 15) * 100;
            return [0, 20, 40, 60, 80, 100].includes(percent)
              ? percent
              : ""; // Hide intermediate ticks
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(200, 200, 200, 0.2)", // Light grid lines
        },
        ticks: {
          display: false, // Hide y-axis ticks to avoid clutter
        },
      },
    },
  };

  // Render the chart and its description
  return (
    <div className="mx-auto p-4 bg-white rounded border-2 border-gray-100">
      {/* Chart title */}
      <h2 className="text-lg font-bold mb-4 hover:underline underline-offset-2 transition-all duration-100">
        Comparison Graph
      </h2>

      {/* User's percentile description */}
      <div className="flex gap-4 mb-8">
        <div className="text-center">
          <p className="text-gray-700 text-left">
            You scored{" "}
            <span className="font-semibold">{yourPercentile}% percentile</span>{" "}
            which is lower than the average percentile{" "}
            <span className="font-semibold">72%</span> of all the engineers who
            took this assessment.
          </p>
        </div>
        {/* Decorative icon */}
        <div className="w-1/4">
          <div className="bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center hover:scale-95 transition-all duration-200">
            📈
          </div>
        </div>
      </div>

      {/* Chart component */}
      <Line data={data} options={options} />
    </div>
  );
};

export default ComparisonChart;
