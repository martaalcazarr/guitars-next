import Image from "next/image"
import styles from "../../styles/guitars.module.css"
import Layout from "../../components/layout"

export default function Product({guitar}) {

  const {name, description, imagen, price} = guitar[0].attributes
  return (
    <Layout
    title={`Guitar ${name}`}>
    <div className={styles.guitar}>
    <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Image of ${name}`} />

    <div className={styles.content}>
      <h3>{name}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>{price} CLP</p>
    </div>
  </div>
  </Layout>
  )
}

export async function getStaticPaths(){
  const response = await fetch(`${process.env.API_URL}/guitars`)
  const {data} = await response.json()

  const paths = data.map(guitar => ({
    params: {
      url: guitar.attributes.url
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: {url}}){
  const response = await fetch(`${process.env.API_URL}/guitars?filters[url]={url}&populate=imagen`)
  const {data: guitar} = await response.json()
  console.log(data)
  return {
    props: {
      guitar
    }
  }
}

// export async function getServerSideProps({query: {url}}){
//   const response = await fetch(`${process.env.API_URL}/guitars?filters[url]={url}&populate=imagen`)
//   const {data: guitar} = await response.json()
//   console.log(data)
//   return {
//     props: {
//       guitar
//     }
//   }
// }