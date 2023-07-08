import Link from "next/link";
import styles from "../styles/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
      <nav className={styles.nav}>
        <Link  href="/">
          Main
        </Link>
        <Link
          
          href="/about"
        >
          About us
        </Link>
        <Link
          
          href="/store"
        >
          Store
        </Link>
        <Link
          
          href="/blog"
        >
          Blog
        </Link>
      </nav>

      <p className={styles.copyright}>Guitar Studio {new Date().getFullYear()} - All rights reserved</p>
      </div>
      
    </footer>
  );
}
