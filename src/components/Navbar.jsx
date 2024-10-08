import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  //const [show, setShow] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className="flex justify-between items-center w-full p-4 shadow-lg h-2/6 bg-blue-500 lg:hidden lg:static lg:z-auto relative z-50">
        <h1 className="text-2xl font-bold text-white">HABITOS</h1>
        {!showMenu && (
            <ul className="flex items-center gap-2 w-max bg-blue-500 flex-col rounded rounded-tr-none mr-2 absolute right-0 mt-80 z-50 lg:hidden">
            <Link className="w-full text-md p-3 hover:bg-blue-400 rounded text-white" to="/">Inicio</Link>
            <Link className="w-full text-md p-3 hover:bg-blue-400 rounded text-white" to="/Tareas">Tareas</Link>
            <Link className="w-full text-md p-3 hover:bg-blue-400 rounded text-white" to="/Calendario">Calendario</Link>
            <Link className="w-full text-md p-3 hover:bg-blue-400 rounded text-white" to="/Reuniones">Reuniones</Link>
            {/* <button className="w-full text-md p-3 rounded text-white" onClick={() => setShow(!show)}>Ramas</button> */}
          </ul>
        )}
      <button onClick={()=> setShowMenu(!showMenu)} className="menuButton">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
      </button>
      </div>
    {/*   {show && (
        <ul className="w-max bg-blue-500 flex flex-col rounded rounded-tr-none mr-2 absolute right-0 mt-24 z-50 lg:hidden">
          <Link className="w-full text-sm p-3 hover:bg-blue-400 rounded text-white">Proyecto 1</Link>
          <Link className="w-full text-sm p-3 hover:bg-blue-400 rounded text-white">Trabajo</Link>
          <Link className="w-full text-sm p-3 hover:bg-blue-400 rounded text-white">Estudio</Link>
        </ul>
      )} */}
    </>
  )
}

export default Navbar
