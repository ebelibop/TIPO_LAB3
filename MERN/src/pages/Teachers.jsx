import { Link } from 'react-router-dom'
import Teacher from '../components/Teacher.jsx'

function Teachers({ information }) {
    return (
        <section className="teacher">
            <div className="teacher__header">
                <div>
                    <p className="home__eyebrow">Directory</p>
                    <h1 className="teacher__title">Teachers</h1>
                </div>

                <Link to="/addTeacher" className="primary-button">
                Add Teacher
                </Link>
            </div>

            <p className="teacher__count">{information.length} teacher(t) listed</p>

            <div className="teacher__grid">
                {information.map((teacher) => (
                    <Teacher key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </section>
    )
}
export default Teachers