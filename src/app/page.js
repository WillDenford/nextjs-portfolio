import styles from "./page.module.css"
import { Profile } from "./components/profile"

export default function Home() {
  return (
    <div className={`${styles.main} ${styles.container}`}>
      <nav>Navbar</nav>
      <header>Header</header>
      <section><Profile /></section>
      <section>Experience</section>
      <section>Education</section>
      <section>Skills</section>
      <section>Contact</section>
    </div>
  )
}
