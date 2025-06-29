import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Stats({ tasks }) {
  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.filter((task) => !task.completed).length;

  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        label: "Tasks",
        data: [completed, pending],
        backgroundColor: ["#16a34a", "#f97316"],
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0
        }
      }
    }
  };

  return (
    <div className="bg-white shadow p-4 rounded mt-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-2 text-center">📈 Productivity Stats</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Stats;
