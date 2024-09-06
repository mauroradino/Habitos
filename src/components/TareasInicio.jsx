import PropTypes from 'prop-types';

const TareasInicio = ({ lista }) => {
  return (
    <ul className="w-full h-44 p-2 overflow-auto bg-slate-50 rounded-lg shadow-md">
        <li className='flex p-2 gap-2 justify-between'>
            <p className="w-3/12 font-bold text-center">Titulo</p>
            <p className="w-6/12 font-bold text-center">Descripcion</p>
            <p className="w-3/12 font-bold text-center">Estado</p>
          </li>
          <hr></hr>
      {lista.map((elemento, index) => {
        let estado = elemento.estado;
        if(estado === true){
          return (
            <>
          <li className='flex p-2 gap-2 justify-between' key={index}>
            <p className='w-3/12'>{elemento.titulo}</p>
            <p className="w-6/12 text-center">{elemento.descripcion}</p>
            <p className={`w-3/12 text-center ${estado ? "text-green-600" : "text-red-600"}`}>{estado ? "Finalizado" : "No finalizado"}</p>
          </li>
          <hr></hr>
            </>
        );
      }
      })}
    </ul>
  );
}

TareasInicio.propTypes = {
  lista: PropTypes.arrayOf(
    PropTypes.shape({
      titulo: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      estado: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default TareasInicio;
