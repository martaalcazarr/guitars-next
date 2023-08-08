import Guitar from "../components/guitars"
import Layout from "../components/layout"
import styles from "../styles/grid.model.css"
import Post from "../components/post"

//fix styles!

export default function Home({guitars, posts}) {
  return (
    <>
    <Layout
    title={'Index'}
    description={'Guitar Store and Blog'}>
      <main className="container">
    <h1 className="heading"> Our collection</h1>
    <div className={styles.guitarsgrid}>
                    {guitars?.map(guitar =>(
                        <Guitar
                        key={guitar.id}
                        guitar={guitar.attributes}
                        />
                    ) )}
                </div>
      </main>
      <section className="container">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
                {posts.map(post =>(
                    <Post
                    key={post.id}
                    post={post.attributes}/>
                ))}
            </div>
      </section>
      
      </Layout>
    </>
   
  )
}

export async function getStaticProps() {
  const urlGuitars = `${process.env.API_URL}/guitars?filters[url]={url}&populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?filters[url]={url}&populate=imagen`

  const [resGuitars, resPosts] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts)
  ])

  const [{data: guitars}, {data: posts}] = await Promise.all([
    resGuitars.json(),
    resPosts.json()
  ])

  return {
    props :{
      guitars,
      posts
    }
  }
}