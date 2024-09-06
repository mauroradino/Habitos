import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import MainDashboard from './pages/MainDashboard'
import TareasPage from './pages/TareasPage'
import CalendarioPage from './pages/CalendarioPage'
import ReunionesPage from './pages/ReunionesPage'
function App() {
  return(
    <Router>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<MainDashboard/>} />
        <Route path="/Tareas" element={<TareasPage/>} />
        <Route path="/Reuniones" element={<ReunionesPage/>} />
        <Route path="/Calendario" element={<CalendarioPage/>} />
      </Routes>
    </Router>
  )
}

export default App
