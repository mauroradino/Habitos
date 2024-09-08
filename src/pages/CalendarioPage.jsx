import Calendario from "../components/Calendario"
const CalendarioPage = () => {
  return (
    <div className="w-full min-h-screen max-h-max overflow-auto bg-blue-100 h-screen pt-32 p-8 fixed z-10 lg:static lg:z-auto">
      <Calendario />
    </div>
  )
}

export default CalendarioPage
