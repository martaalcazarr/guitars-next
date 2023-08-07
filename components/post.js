import Image from "next/image"
import Link from "next/link"
import styles from "../styles/blog.module.css"
import { formatDate } from "../utils/helpers"
//faltan los styles!!revisar
export default function Post({post}) {

    const {content, image, title, url, publishedAt} = post
  return (
   <article>
        <Image src={image.data.attributes.formats.medium.url} alt={`Imagen post ${title}`} width={600} height={400}/>
        <div className={styles.content} >
        <h3>{title}</h3>
        <p className={styles.date}>{formatDate(publishedAt)}</p>
        <p className={styles.resume}>{content}</p>
        <Link href={`/blog/${url}`}>
        <a className={styles.link}>Read post</a>
        </Link>
        </div>
   </article>
  )
}
