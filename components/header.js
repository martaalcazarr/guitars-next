import Image from "next/image"
import Link from "next/link"


export default function Header() {
  return (
    <header>
        <div className="container">
            <Image src="/img/logo.svg" width={300} height={200} alt="logo"/>

            <nav>
              <Link href="/">Main</Link>
              <Link href="/about">About us</Link>
              <Link href="/store">Store</Link>
              <Link href="/blog">Blog</Link>
            </nav>
        </div>
    </header>
  )
}
