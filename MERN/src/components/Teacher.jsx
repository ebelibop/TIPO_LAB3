import { Link } from 'react-router-dom'

    export default function Teacher({ teacher }) {
        const { id, name, specialization, department, sex } = teacher
      return (
        <article className="teacher-card">
            <div className="teacher-card__body">
                <div className="teacher-card__badge">#{id}</div>
                <h3 className="teacher-card__name">{name}</h3>
                <p className="teacher-card__specialization">{specialization}</p>
                <p className="teacher-card__department">{department}</p>
                <p className="teacher-card__sex">{sex}</p>
                <Link to={`/teacher/${id}`} className="teacher-card__Link">
                View full details
                </Link>
            </div>
        </article>
      )
    }