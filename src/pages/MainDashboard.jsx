import TareasInicio from "../components/TareasInicio"
import ReunionesJSON from "../assets/reuniones.json"
import TareasJSON from "../assets/tareas.json"
import Grafico from "../components/Grafico"
import ReunionesInicio from "../components/ReunionesInicio"
const MainDashboard = () => {
    return (
      <div className="w-full bg-blue-100 h-screen p-8 fixed z-10 lg:static lg:z-auto">
        <Grafico/>
        <div className="flex w-full justify-evenly">
        <div className="w-5/12">
        <h2>Tareas Finalizadas</h2>
        <TareasInicio lista={TareasJSON} />
        </div>
        <div className="w-5/12">
        <h2>Próximas Reuniones</h2>
        <ReunionesInicio lista={ReunionesJSON}/>
        </div>
        </div>
      </div>
    )
  }
  
  export default MainDashboard
  