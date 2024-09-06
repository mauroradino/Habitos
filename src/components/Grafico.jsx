import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import TareasJSON from "../assets/tareas.json"
ChartJS.register(ArcElement, Tooltip, Legend);

const Grafico = () => {
    let contadorFinalizadas = 0
    let contadorNOFinalizadas = 0
    let porcentajeFinalizadas = 0
    let porcentajeNOFinalizadas = 0

    TareasJSON.map(tarea => {
        if(tarea.estado === true){
            contadorFinalizadas += 1
        }else{
            contadorNOFinalizadas += 1
        }
    })

    porcentajeFinalizadas = (contadorFinalizadas * 100) / TareasJSON.length
    porcentajeNOFinalizadas = (contadorNOFinalizadas * 100) / TareasJSON.length
    
  const data = {
    labels: ['Finalizado', 'No Finalizado'],
    datasets: [
      {
        label: 'Framework Popularity',
        data: [porcentajeFinalizadas, porcentajeNOFinalizadas],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}%`,
        },
      },
    },
  };

  return (
    <div className='w-4/12'>
        <Doughnut data={data} options={options} />;
    </div>
  )
};

export default Grafico;
