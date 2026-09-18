import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddStudents({ information, setInformation }) {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [studentNumber, setStudentNumber] = useState('')
  const [course, setCourse] = useState('')
  const [yearSection, setYearSection] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newStudent = {
      id: information.length + 1,
      name,
      studentNumber,
      course,
      yearSection,
      email,
      address,
    }

    setInformation([...information, newStudent])
    navigate('/students')

    setName('')
    setStudentNumber('')
    setCourse('')
    setYearSection('')
    setEmail('')
    setAddress('')
  }

  return (
    <section className="add-student">
      <div className="add-student__card">
        <div className="students__header students__header--compact">
          <div>
            <p className="home__eyebrow">Enrollment</p>
            <h1 className="students__title">Add Student</h1>
          </div>
        </div>

        <form className="add-student__form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="studentNumber">Student number</label>
              <input
                id="studentNumber"
                type="text"
                value={studentNumber}
                onChange={(e) => setStudentNumber(e.target.value)}
                placeholder="Enter student number"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="course">Course</label>
              <input
                id="course"
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Enter course"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="yearSection">Year &amp; section</label>
              <input
                id="yearSection"
                type="text"
                value={yearSection}
                onChange={(e) => setYearSection(e.target.value)}
                placeholder="Enter year & section"
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
              required
            />
          </div>

          <button type="submit" className="primary-button primary-button--full">
            Save Student
          </button>
        </form>
      </div>
    </section>
  )
}