import Layout from "../../components/layout"
import Image from "next/image"
import styles from "../../styles/blog.module.css"
//fix styles!!
import { formatDate } from "../../utils/helpers"

export default function Post({post}) {
    const {title, content, image, publishedAt} = post
  return (
    <Layout
    title={title}>
       <article>
        <Image src={image.data.attributes.url} alt={`Imagen post ${title}`} width={1000} height={400}/>
        <div className={styles.content} >
        <h3>{title}</h3>
        <p className={styles.date}>{formatDate(publishedAt)}</p>
        <p className={styles.text}>{content}</p>
        
        </div>
   </article>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}){
  const response = await fetch(`${process.env.API_URL}/posts?filters[url]={url}&populate=imagen`)
  const {data: post} = await response.json()
  console.log(data)
  return {
    props: {
      post
    }
  }
}