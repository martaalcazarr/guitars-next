import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"

export default function Header() {

  const router = useRouter()

  return (
    <header className={styles.header}>
        <div className={`container ${styles.navbar}`}>
          <Link href={'/'}>
          <Image src="/img/logo.svg" width={300} height={200} alt="logo"/>
          </Link>
            

            <nav className={styles.nav}>
              <Link className={router.pathname === '/' ? styles.active : ''} href="/">
                Main
                </Link>
              <Link className={router.pathname === '/about' ? styles.active : ''} href="/about">About us</Link>
              <Link className={router.pathname === '/store' ? styles.active : ''} href="/store">Store</Link>
              <Link className={router.pathname === '/blog' ? styles.active : ''} href="/blog">Blog</Link>
            </nav>
        </div>
    </header>
  )
}
