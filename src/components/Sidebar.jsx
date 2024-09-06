import { Link } from "react-router-dom"
const Sidebar = () => {
  return (
    <div className="hidden p-4 w-1/6 h-screen rounded-tr-lg rounded-br-lg bg-blue-500 lg:flex lg:flex-col">
      <h1 className="text-white font-bold text-3xl text-center mb-6">SIDEBAR</h1>
      <ul className="flex flex-col mb-10">
        <Link to="/" className="w-full text-lg p-3 hover:bg-blue-400 rounded text-white">Inicio</Link>
        <Link to="/Calendario" className="w-full text-lg p-3 hover:bg-blue-400 rounded text-white">Calendario</Link>
        <Link to="/Tareas" className="w-full text-lg p-3 hover:bg-blue-400 rounded text-white">Tareas</Link>
        <Link to="/Reuniones" className="w-full text-lg p-3 hover:bg-blue-400 rounded text-white">Reuniones</Link>
      </ul>
      <h2 className="text-white mb-4 mt-10">Tus Ramas</h2>
        <Link className="w-full text-sm p-3 hover:bg-blue-400 rounded text-white">Proyecto 1</Link>
        <Link className="w-full text-sm p-3 hover:bg-blue-400 rounded text-white">Trabajo</Link>
        <Link className="w-full text-sm p-3 hover:bg-blue-400 rounded text-white">Estudio</Link>
    </div>
  )
}

export default Sidebar
