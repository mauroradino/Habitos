import ReunionesJSON from "../assets/reuniones.json"

const ReunionesPage = () => {
  return (
    <div className="w-full bg-blue-100 h-screen p-8 fixed z-10 lg:static lg:z-auto">
      <ul className="w-full h-full p-2 overflow-auto bg-slate-50 rounded-lg shadow-md">
        {ReunionesJSON.map((elemento, index) => {
            return(
                <>
          <li className='flex p-2 gap-2 justify-between' key={index}>
            <p className='w-3/12'>{elemento.titulo}</p>
            <p className="w-6/12 text-center">{elemento.equipo}</p>
            <p className="w-3/12 text-center">{elemento.fecha}</p>
            <p className="w-3/12 text-center text-blue-500 underline">{elemento.enlace}</p>
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
