import React, { useState } from "react"
import TareasJSON from "../assets/tareas.json"
import ModalComponent from "../components/Modal";

const TareasPage = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
          <>
    <div className="w-full pt-32 bg-blue-100 h-screen p-8 fixed z-10 lg:static lg:z-auto">
        <button className="mb-4" onClick={handleShow} ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg></button>
      <ul className="w-full h-5/6 p-2 overflow-auto bg-slate-50 rounded-lg shadow-md">
      <li className='flex p-2 gap-2 justify-between'>
            <p className='font-bold w-3/12'>Titulo</p>
            <p className="font-bold w-6/12 text-center">Descripcion</p>
            <p className="font-bold w-3/12 text-center">Estado</p>
          </li>
          <hr></hr>
        {TareasJSON.map((elemento, i) => {
            let estado = elemento.estado
            return(
                <React.Fragment key={i}>
          <li className='flex p-2 gap-2 justify-between' >
            <p className='w-3/12'>{elemento.titulo}</p>
            <p className="w-6/12 text-center">{elemento.descripcion}</p>
            <p className={`w-3/12 text-center ${estado ? "text-green-600" : "text-red-600"}`}>{estado ? "Finalizado" : "No finalizado"}</p>
          </li>
          <hr></hr>
            </React.Fragment>
            )
        })}
      </ul>
    </div>
    <ModalComponent show={show} handleClose={handleClose} />
    </>
  )
}

export default TareasPage
