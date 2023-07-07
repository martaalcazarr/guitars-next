import Link from "next/link"
import Layout from "../components/layout"

export default function Blog(){
    return(
        <Layout
            title={'Blog'}
            description={'Blog - Guitar Studio'}    
        >
            <h1>blog</h1>

            <Link href="/">Return to main</Link>
        </Layout>
    )
}
