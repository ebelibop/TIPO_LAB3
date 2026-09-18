import { Link } from 'react-router-dom'

function Student({ student }) {
  const { id, name, studentNumber, course, yearSection, email, address } = student

  return (
    <article className="student-card">
      <div className="student-card__body">
        <div className="student-card__badge">#{id}</div>
        <h3 className="student-card__name">{name}</h3>
        <p className="student-card__number">{studentNumber}</p>
        <p className="student-card__meta">
          {course} · {yearSection}
        </p>
        <p className="student-card__meta">{email}</p>
        <p className="student-card__meta student-card__meta--address">{address}</p>
        <Link to={`/students/${id}`} className="student-card__link">
          View full details
        </Link>
      </div>
    </article>
  )
}

export default Student