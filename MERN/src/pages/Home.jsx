import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home">
      <p className="home__eyebrow">DCIT 26 Laboratory Exercise 3</p>

      <Link to="/students" className="home__cta">
        Browse students
      </Link>
    </section>
  )
}

export default Home
