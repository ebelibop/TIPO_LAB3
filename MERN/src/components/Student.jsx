import { Link } from 'react-router-dom'

function Student({ student }) {
  const { id, name, studentNumber, course, yearSection, email, address } = student

  return (
    <div className="student-card">
      <div className="student-card__body">
        <h3 className="student-card__name">{name}</h3>
        <p className="student-card__number">{studentNumber}</p>
        <p className="student-card__meta">
          {course}.{yearSection}
        </p>
        <p className="student-card__meta">{email}</p>
        <p className="student-card__meta">{address}</p>
        <Link to={`/students/${id}`} className="student-card_link">
          View full details
        </Link>
      </div>
    </div>
  )
}

export default Student