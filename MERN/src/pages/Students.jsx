import { Link } from 'react-router-dom'
import Student from '../components/Student.jsx'

export default function Students({ information }) {
  return (
    <div>
      <h1>Students</h1>

      <Link to="/addStudent">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded">
          Add Student
        </button>
      </Link>

      {information.map((student) => (
        <Student key={student.id} student={student} />
      ))}
    </div>
  )
}