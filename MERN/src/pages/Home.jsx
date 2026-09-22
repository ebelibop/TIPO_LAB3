import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home">
      <p className="home__eyebrow">DCIT 26 • Laboratory Exercise 3</p>
      <h1 className="home__title">Track and manage your student records with clarity.</h1>
      <p className="home__lede">
        Keep every student profile organized, easy to browse, and ready to update in one place.
      </p>

      <div className="home__actions">
        <Link to="/students" className="home__cta">
          Browse students
        </Link>
        <Link to="/addStudent" className="secondary-button">
          Add a student
        </Link>
        <Link to="/addTeacher" className="secondary-button">
          Add a teacher
        </Link>
      </div>

      <div className="home__stats" aria-label="Summary stats">
        <div className="home__stat">
          <strong>Simple</strong>
          <span>Clean student overview</span>
        </div>
        <div className="home__stat">
          <strong>Fast</strong>
          <span>Quick access to details</span>
        </div>
        <div className="home__stat">
          <strong>Organized</strong>
          <span>Updated records in one app</span>
        </div>
      </div>
    </section>
  )
}

export default Home
