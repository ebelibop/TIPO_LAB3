import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Students from './pages/Students.jsx'
import StudentDetails from './pages/StudentDetails.jsx'
import AddStudents from './pages/AddStudents.jsx'
import studentData from './data/students.json'
import './index.css'

function App() {
  const [information, setInformation] = useState(studentData)

  return (
    <BrowserRouter>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students information={information} />} />
          <Route path="/students/:id" element={<StudentDetails information={information} />} />
          <Route path="/addStudent" element={<AddStudents information={information} setInformation={setInformation} />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App