import TareasInicio from "../components/TareasInicio"
import ReunionesJSON from "../assets/reuniones.json"
import TareasJSON from "../assets/tareas.json"
import Grafico from "../components/Grafico"
import ReunionesInicio from "../components/ReunionesInicio"
const MainDashboard = () => {
    return (
      <div className="w-full md:h-screen lg:h-screen lg:min-h-full flex flex-col pt-32 overflow-auto justify-center md:flex-row lg:flex-row bg-blue-100 p-8 absolute z-10 lg:pt-8 lg:static lg:z-auto">
      <div className="w-full lg:w-6/12 h-full flex flex-col justify-between">
        <Grafico />
      <h2 className="text-2xl mb-2 md:hidden lg:hidden">Tareas</h2>
        <TareasInicio lista={TareasJSON} />
      </div>
      <div className="w-full lg:w-6/12 h-full">
      <h2 className="text-2xl mb-2 mt-4 md:hidden lg:hidden">Reuniones</h2>
        <ReunionesInicio lista={ReunionesJSON} />
      </div>
    </div>
    
    )
  }
  
  export default MainDashboard
  