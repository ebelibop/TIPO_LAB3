import { Link, useParams } from 'react-router-dom'

function StudentDetails({ student }) {
  const { id } = useParams()
  const student = information.find((s) => s.id === Number(id))

  if (!student) {
    return (
      <section className="details details--empty">
        <h1 className="students__title">Student not found</h1>
        <p className="students__count">We couldn't find a student with that ID.</p>
        <Link to="/students" className="details__back">
          Back to students
        </Link>
      </section>
    )
  }

  const { name, studentNumber, course, yearSection, email, address } = student

  return (
    <section className="details">
      <Link to="/students" className="details__back">
        Back to students
      </Link>

      <div className="details__card">
        <div className="details__header">
          <div>
            <p className="home__eyebrow">Profile</p>
            <h1 className="details__name">{name}</h1>
          </div>
          <span className="student-card__badge">#{student.id}</span>
        </div>

        <dl className="details__list">
          <div className="details__row">
            <dt>Student number</dt>
            <dd>{studentNumber}</dd>
          </div>
          <div className="details__row">
            <dt>Course</dt>
            <dd>{course}</dd>
          </div>
          <div className="details__row">
            <dt>Year &amp; section</dt>
            <dd>{yearSection}</dd>
          </div>
          <div className="details__row">
            <dt>Email</dt>
            <dd>{email}</dd>
          </div>
          <div className="details__row">
            <dt>Address</dt>
            <dd>{address}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default StudentDetails
