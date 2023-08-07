import Link from "next/link"
import Layout from "../components/layout"
import Post from "../components/post"
import styles from "../styles/grid.module.css"
//falta grid!!

export default function Blog({posts}){
    return(
        <Layout
            title={'Blog'}
            description={'Blog - Guitar Studio'}    
        >
           <main className="container">
            <h1 className="heading">Blog</h1>
            <div className={styles.grid}>
                {posts.map(post =>(
                    <Post
                    key={post.id}
                    post={post.attributes}/>
                ))}
            </div>
           </main>

            <Link href="/">Return to main</Link>
        </Layout>
    )
}


export async function getStaticProps(){
    const response = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
    const {data: posts} = await response.json()
    
    return{
        props: {
            posts
        }
    }
}