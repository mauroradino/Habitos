import PropTypes from 'prop-types';

const ReunionesInicio = ({ lista }) => {
  return (
    <ul className="w-full mx-auto h-96 p-2 overflow-auto bg-slate-50 md:w-11/12 md:h-full lg:h-full lg:w-11/12 rounded-lg shadow-md">
        <li className='flex p-2 gap-2 justify-between'>
            <p className="w-3/12 font-bold text-center">Titulo</p>
            <p className="w-6/12 font-bold text-center">Equipo</p>
            <p className="w-3/12 font-bold text-center">Fecha</p>
          </li>
          <hr></hr>
      {lista.map((elemento, index) => {
        return (
            <>
          <li className='flex p-2 gap-2 justify-between' key={index}>
            <p className='w-3/12'>{elemento.titulo}</p>
            <p className="w-6/12 text-center">{elemento.equipo}</p>
            <p className="w-3/12 text-center">{elemento.fecha}</p>
          </li>
          <hr></hr>
            </>
        );
      })}
    </ul>
  );
}

ReunionesInicio.propTypes = {
  lista: PropTypes.arrayOf(
    PropTypes.shape({
      titulo: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      estado: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ReunionesInicio;
