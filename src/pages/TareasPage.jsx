import TareasJSON from "../assets/tareas.json"

const TareasPage = () => {
  return (
    <div className="w-full bg-blue-100 h-screen p-8 fixed z-10 lg:static lg:z-auto">
      <ul className="w-full h-full p-2 overflow-auto bg-slate-50 rounded-lg shadow-md">
        {TareasJSON.map((elemento, index) => {
            let estado = elemento.estado
            return(
                <>
          <li className='flex p-2 gap-2 justify-between' key={index}>
            <p className='w-3/12'>{elemento.titulo}</p>
            <p className="w-6/12 text-center">{elemento.descripcion}</p>
            <p className={`w-3/12 text-center ${estado ? "text-green-600" : "text-red-600"}`}>{estado ? "Finalizado" : "No finalizado"}</p>
          </li>
          <hr></hr>
            </>
            )
        })}
      </ul>
    </div>
  )
}

export default TareasPage
