import Link from "next/link"
import Layout from "../components/layout"

export default function About(){
    return(
        <Layout
            title={'About us'}
            description={'About us - Guitar Studio'}    
        >
            <h1>about</h1>

            <Link href="/">Return to main</Link>
        </Layout>
    )
}
