import { Link } from 'react-router-dom'
import Student from '../components/Student.jsx'

export default function Students({ information }) {
  return (
    <section className="students">
      <div className="students__header">
        <div>
          <p className="home__eyebrow">Directory</p>
          <h1 className="students__title">Students</h1>
        </div>

        <Link to="/addStudent" className="primary-button">
          Add Student
        </Link>

      </div>

      <p className="students__count">{information.length} student(s) listed</p>

      <div className="students__grid">
        {information.map((student) => (
          <Student key={student.id} student={student} />
        ))}
      </div>
    </section>
  )
}