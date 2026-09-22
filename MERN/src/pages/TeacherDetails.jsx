import { Link, useParams } from 'react-router-dom'

function TeacherDetails({ information }) {
    const { id } = useParams()
    const teacher = information.find((t) => t.id === Number(id))

    if (!teacher) {
        return (
            <section className="details details--empty">
                <h1 className="teacher__title">Student not found</h1>
                <p className="teacher__count">We couldn't find a student with that ID.</p>
                <Link to="/teacher" className="details__back">
                Back to teachers
                </Link>
            </section>
        )
    }

    const { name, specialization, department, sex } = teacher
    return (
        <section className="details">
            <Link to="/teacher" className="details__back">
            Back to teachers
            </Link>

            <div className="details__card">
                <div>
                    <p className="home__eyebrow">Profile</p>
                    <h1 className="details__name">{name}</h1>
                </div>
                <span className="teacher-card__badge">#{teacher.id}</span>
            </div>

            <dl className="details__list">
                <div className="details__row">
                    <dt>Name</dt>
                    <dd>{name}</dd>
                </div>
                <div className="details__row">
                    <dt>Specialization</dt>
                    <dd>{specialization}</dd>
                </div>
                <div className="details__row">
                    <dt>Department</dt>
                    <dd>{department}</dd>
                </div>
                <div className="details__row">
                    <dt>Sex</dt>
                    <dd>{sex}</dd>
                </div>
            </dl>
        </section>
    )
}

export default TeacherDetails