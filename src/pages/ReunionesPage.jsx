import ReunionesJSON from "../assets/reuniones.json"

const ReunionesPage = () => {
  return (
    <div className="w-full bg-blue-100 pt-32 h-screen p-8 fixed z-10 lg:static lg:z-auto">
      <ul className="w-full max-h-full min-h-max px-4 overflow-auto bg-slate-50 rounded-lg shadow-md">
      <li className='flex p-2 gap-2 justify-between'>
            <p className='w-2/12 font-bold text-xs'>Titulo</p>
            <p className="w-4/12 font-bold text-xs text-center">Equipo</p>
            <p className="w-2/12 font-bold text-xs text-center">Fecha</p>
            <p className="w-4/12 font-bold text-xs text-center hidden lg:flex md:flex">Enlace</p>
          </li>
          <hr></hr>
        {ReunionesJSON.map((elemento, index) => {
            return(
                <>
          <li className='flex p-2 gap-2 justify-between' key={index}>
            <p className='w-2/12 text-xs'>{elemento.titulo}</p>
            <p className="w-4/12 text-xs text-center">{elemento.equipo}</p>
            <p className="w-2/12 text-xs text-center">{elemento.fecha}</p>
            <p className="w-4/12 text-xs text-center hidden lg:flex md:flex text-blue-500 underline">{elemento.enlace}</p>
          </li>
          <hr></hr>
            </>
            )
        })}
      </ul>
    </div>
  )
}

export default ReunionesPage
