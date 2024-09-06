import { Bar } from "react-chartjs-2"
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement);

const Chart = () => {

  return (
    <div>
      <Bar  />
    </div>
  )
}

export default Chart
