import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Swal from "sweetalert2";
import "../estilosCalendario.css"

const localizer = momentLocalizer(moment);

const Calendario = () => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = async ({ start, end }) => {
    try {
      const { value: title } = await Swal.fire({
        title: 'Tarea',
        input: 'text',
        inputLabel: 'Ingresá el titulo de tu tarea',
        inputPlaceholder: '"Mi Tarea"',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
      });

      if (title) {
        setEvents([...events, { start, end, title }]);
      }
    } catch (error) {
      console.error('Error with Swal.fire:', error);
    }
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        onSelectSlot={handleSelectSlot} 
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Calendario;
