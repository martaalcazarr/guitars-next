import Link from "next/link"
import Layout from "../components/layout"

export default function Store(){
    return(
        <Layout
            title={'Store'}
            description={'Store - Guitar Studio'}    
        >
            <h1>Store</h1>

            <Link href="/">Return to main</Link>
        </Layout>
    )
}
