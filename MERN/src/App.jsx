import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Students from './pages/Students.jsx'
import StudentDetails from './pages/StudentDetails.jsx'
import AddStudents from './pages/AddStudents.jsx'
import studentData from './data/students.json'
import Teachers from './pages/Teachers.jsx'
import AddTeachers from './pages/AddTeachers.jsx'
import TeacherDetails from './pages/TeacherDetails.jsx'
import teacherData from './data/teachers.json'
import './index.css'

export default function App() {
  const [students, setStudent] = useState([])

  useEffect (() => {

    fetch("http://localhost:5000/api/students")
      .then(response => response.json())
      .then(data => {
        setStudents(data);

      });

  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students information={information} />} />
          <Route path="/students/:id" element={<StudentDetails information={information} />} />
          <Route path="/addStudent" element={<AddStudents information={information} setInformation={setInformation} />} />
          <Route path="/teacher" element={<Teachers information={information} />} />
          <Route path="/teacher/:id" element={<TeacherDetails information={information} />} />
          <Route path="/addTeacher" element={<AddTeachers information={information} setInformation={setInformation} />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}