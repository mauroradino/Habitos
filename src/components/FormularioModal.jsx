
const FormularioModal = () => {
  return (
    <div className="flex flex-col gap-4">
    <div className="flex flex-col">
    <label>Titulo</label>
    <input className="p-2 mt-2 border rounded border-black" type="text" placeholder='"Mi Titulo"'/>
    </div>  
    <div className="flex flex-col">
    <label>Descripcion</label>
    <input className="p-2 mt-2 border rounded border-black" type="text" placeholder='"Descripcion de mi tarea"'/>
    </div>
    </div>
  )
}

export default FormularioModal
