import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitars.module.css'

export default function Guitar({guitar}) {

  const {description, imagen, name, price, url} = guitar
  console.log(guitar)
  return (
    <div className={styles.guitar}>
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Image of ${name}`} />

      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price} CLP</p>
        <Link href={`/guitars/${url}`}>
        <button className={styles.link}>See product</button>
        </Link>
      </div>
    </div>
  )
}
